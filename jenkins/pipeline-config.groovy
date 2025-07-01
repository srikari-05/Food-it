// Jenkins Pipeline Configuration
// This file contains reusable pipeline configurations

def getNodeVersion() {
    return '18'
}

def getDockerRegistry() {
    return env.DOCKER_REGISTRY ?: 'your-registry.com'
}

def getSlackChannel() {
    return env.SLACK_CHANNEL ?: '#deployments'
}

def getBranchDeploymentMap() {
    return [
        'main': 'production',
        'develop': 'staging',
        'feature/*': 'development'
    ]
}

def shouldDeploy(branchName) {
    def deploymentMap = getBranchDeploymentMap()
    return deploymentMap.containsKey(branchName) || branchName.startsWith('feature/')
}

def getEnvironmentFromBranch(branchName) {
    def deploymentMap = getBranchDeploymentMap()
    
    if (deploymentMap.containsKey(branchName)) {
        return deploymentMap[branchName]
    }
    
    if (branchName.startsWith('feature/')) {
        return 'development'
    }
    
    return 'staging'
}

def runSecurityScan() {
    sh '''
        # Run npm audit
        npm audit --audit-level moderate
        
        # Run Snyk security scan
        npx snyk test --severity-threshold=high
        
        # Run OWASP dependency check
        dependency-check --project "City Food Portal" --scan . --format JSON --out dependency-check-report.json
    '''
}

def runCodeQualityChecks() {
    parallel(
        'ESLint': {
            sh 'npm run lint -- --format=checkstyle --output-file=eslint-report.xml'
        },
        'TypeScript': {
            sh 'npx tsc --noEmit'
        },
        'Prettier': {
            sh 'npx prettier --check "src/**/*.{ts,tsx,js,jsx}"'
        }
    )
}

def buildAndPushDockerImage(imageName, tag) {
    script {
        def image = docker.build("${imageName}:${tag}", "-f docker/Dockerfile .")
        
        docker.withRegistry("https://${getDockerRegistry()}", 'docker-registry-credentials') {
            image.push(tag)
            image.push('latest')
        }
        
        return image
    }
}

def deployToEnvironment(environment, imageName, tag) {
    script {
        def deployScript = '''
            export ENVIRONMENT=%s
            export DOCKER_IMAGE=%s:%s
            chmod +x deploy/deploy.sh
            ./deploy/deploy.sh
        '''
        
        sh sprintf(deployScript, environment, imageName, tag)
    }
}

def sendSlackNotification(status, message) {
    def color = status == 'success' ? 'good' : 'danger'
    def emoji = status == 'success' ? '✅' : '❌'
    
    slackSend(
        channel: getSlackChannel(),
        color: color,
        message: "${emoji} ${message}"
    )
}

return this
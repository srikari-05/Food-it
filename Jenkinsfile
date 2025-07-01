pipeline {
    agent any
    
    environment {
        NODE_VERSION = '18'
        DOCKER_IMAGE = 'city-food-portal'
        DOCKER_TAG = "${BUILD_NUMBER}"
        REGISTRY_URL = 'your-registry.com'
        STAGING_SERVER = 'staging.city-food-portal.com'
        PRODUCTION_SERVER = 'city-food-portal.com'
    }
    
    tools {
        nodejs "${NODE_VERSION}"
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
                script {
                    env.GIT_COMMIT_SHORT = sh(
                        script: "git rev-parse --short HEAD",
                        returnStdout: true
                    ).trim()
                }
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }
        
        stage('Code Quality') {
            parallel {
                stage('Lint') {
                    steps {
                        sh 'npm run lint'
                    }
                }
                stage('Type Check') {
                    steps {
                        sh 'npx tsc --noEmit'
                    }
                }
            }
        }
        
        stage('Build') {
            steps {
                sh 'npm run build'
                archiveArtifacts artifacts: 'dist/**/*', fingerprint: true
            }
        }
        
        stage('Security Scan') {
            steps {
                sh 'npm audit --audit-level moderate'
                sh 'npx snyk test --severity-threshold=high'
            }
        }
        
        stage('Build Docker Image') {
            steps {
                script {
                    def image = docker.build("${DOCKER_IMAGE}:${DOCKER_TAG}")
                    docker.withRegistry("https://${REGISTRY_URL}", 'docker-registry-credentials') {
                        image.push()
                        image.push('latest')
                    }
                }
            }
        }
        
        stage('Deploy to Staging') {
            when {
                branch 'develop'
            }
            steps {
                script {
                    deployToEnvironment('staging', STAGING_SERVER)
                }
            }
        }
        
        stage('Integration Tests') {
            when {
                branch 'develop'
            }
            steps {
                sh 'npm run test:integration'
            }
        }
        
        stage('Deploy to Production') {
            when {
                branch 'main'
            }
            steps {
                input message: 'Deploy to Production?', ok: 'Deploy'
                script {
                    deployToEnvironment('production', PRODUCTION_SERVER)
                }
            }
        }
        
        stage('Health Check') {
            when {
                anyOf {
                    branch 'main'
                    branch 'develop'
                }
            }
            steps {
                script {
                    def server = env.BRANCH_NAME == 'main' ? PRODUCTION_SERVER : STAGING_SERVER
                    sh "curl -f http://${server}/health || exit 1"
                }
            }
        }
    }
    
    post {
        always {
            cleanWs()
        }
        success {
            slackSend(
                channel: '#deployments',
                color: 'good',
                message: "✅ Deployment successful: ${env.JOB_NAME} - ${env.BUILD_NUMBER} (${env.GIT_COMMIT_SHORT})"
            )
        }
        failure {
            slackSend(
                channel: '#deployments',
                color: 'danger',
                message: "❌ Deployment failed: ${env.JOB_NAME} - ${env.BUILD_NUMBER} (${env.GIT_COMMIT_SHORT})"
            )
        }
    }
}

def deployToEnvironment(environment, server) {
    sh """
        docker run --rm \
            -v \$(pwd)/deploy:/deploy \
            -e ENVIRONMENT=${environment} \
            -e SERVER=${server} \
            -e DOCKER_IMAGE=${DOCKER_IMAGE}:${DOCKER_TAG} \
            deployment-tools:latest \
            /deploy/deploy.sh
    """
}
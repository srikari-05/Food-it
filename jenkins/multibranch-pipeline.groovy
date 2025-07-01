// Multibranch Pipeline Configuration for City Food Portal
@Library('city-food-portal-shared-lib') _

// Pipeline configuration based on branch
def getPipelineConfig() {
    def config = [:]
    
    switch(env.BRANCH_NAME) {
        case 'main':
            config = [
                nodeVersion: '18',
                dockerImage: 'city-food-portal',
                registryUrl: 'production-registry.com',
                environment: 'production',
                requireApproval: true,
                runFullTests: true,
                enableMonitoring: true
            ]
            break
            
        case 'develop':
            config = [
                nodeVersion: '18',
                dockerImage: 'city-food-portal-staging',
                registryUrl: 'staging-registry.com',
                environment: 'staging',
                requireApproval: false,
                runFullTests: true,
                enableMonitoring: true
            ]
            break
            
        case ~/^feature\/.*/:
            config = [
                nodeVersion: '18',
                dockerImage: 'city-food-portal-dev',
                registryUrl: 'dev-registry.com',
                environment: 'development',
                requireApproval: false,
                runFullTests: false,
                enableMonitoring: false
            ]
            break
            
        default:
            config = [
                nodeVersion: '18',
                dockerImage: 'city-food-portal-pr',
                registryUrl: 'dev-registry.com',
                environment: 'review',
                requireApproval: false,
                runFullTests: false,
                enableMonitoring: false
            ]
    }
    
    return config
}

// Main pipeline execution
node {
    def config = getPipelineConfig()
    
    // Use shared library pipeline
    cityFoodPortalPipeline(config)
}
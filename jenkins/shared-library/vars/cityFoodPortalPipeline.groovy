// Shared Library for City Food Portal Pipeline
def call(Map config) {
    pipeline {
        agent any
        
        environment {
            NODE_VERSION = config.nodeVersion ?: '18'
            DOCKER_IMAGE = config.dockerImage ?: 'city-food-portal'
            REGISTRY_URL = config.registryUrl ?: 'your-registry.com'
        }
        
        tools {
            nodejs "${NODE_VERSION}"
        }
        
        stages {
            stage('Setup') {
                steps {
                    script {
                        // Load pipeline configuration
                        def pipelineConfig = load 'jenkins/pipeline-config.groovy'
                        env.PIPELINE_CONFIG = pipelineConfig
                    }
                }
            }
            
            stage('Checkout & Prepare') {
                steps {
                    checkout scm
                    script {
                        env.GIT_COMMIT_SHORT = sh(
                            script: "git rev-parse --short HEAD",
                            returnStdout: true
                        ).trim()
                        
                        env.BUILD_TAG = "${env.BUILD_NUMBER}-${env.GIT_COMMIT_SHORT}"
                    }
                }
            }
            
            stage('Install Dependencies') {
                steps {
                    sh 'npm ci'
                }
            }
            
            stage('Code Quality & Security') {
                parallel {
                    stage('Code Quality') {
                        steps {
                            script {
                                env.PIPELINE_CONFIG.runCodeQualityChecks()
                            }
                        }
                    }
                    stage('Security Scan') {
                        steps {
                            script {
                                env.PIPELINE_CONFIG.runSecurityScan()
                            }
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
            
            stage('Docker Build & Push') {
                steps {
                    script {
                        env.PIPELINE_CONFIG.buildAndPushDockerImage(
                            env.DOCKER_IMAGE, 
                            env.BUILD_TAG
                        )
                    }
                }
            }
            
            stage('Deploy') {
                when {
                    anyOf {
                        branch 'main'
                        branch 'develop'
                        branch 'feature/*'
                    }
                }
                steps {
                    script {
                        def environment = env.PIPELINE_CONFIG.getEnvironmentFromBranch(env.BRANCH_NAME)
                        
                        if (environment == 'production') {
                            input message: 'Deploy to Production?', ok: 'Deploy'
                        }
                        
                        env.PIPELINE_CONFIG.deployToEnvironment(
                            environment,
                            env.DOCKER_IMAGE,
                            env.BUILD_TAG
                        )
                    }
                }
            }
        }
        
        post {
            always {
                publishHTML([
                    allowMissing: false,
                    alwaysLinkToLastBuild: true,
                    keepAll: true,
                    reportDir: '.',
                    reportFiles: 'eslint-report.xml',
                    reportName: 'ESLint Report'
                ])
                
                cleanWs()
            }
            success {
                script {
                    env.PIPELINE_CONFIG.sendSlackNotification(
                        'success',
                        "Deployment successful: ${env.JOB_NAME} - ${env.BUILD_TAG}"
                    )
                }
            }
            failure {
                script {
                    env.PIPELINE_CONFIG.sendSlackNotification(
                        'failure',
                        "Deployment failed: ${env.JOB_NAME} - ${env.BUILD_TAG}"
                    )
                }
            }
        }
    }
}
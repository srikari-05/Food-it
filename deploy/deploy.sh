#!/bin/bash

set -e

# Configuration
ENVIRONMENT=${ENVIRONMENT:-staging}
SERVER=${SERVER:-localhost}
DOCKER_IMAGE=${DOCKER_IMAGE:-city-food-portal:latest}
COMPOSE_FILE="docker/docker-compose.yml"

echo "🚀 Starting deployment to ${ENVIRONMENT} environment..."
echo "📦 Deploying image: ${DOCKER_IMAGE}"
echo "🌐 Target server: ${SERVER}"

# Function to check if service is healthy
check_health() {
    local max_attempts=30
    local attempt=1
    
    echo "🔍 Checking application health..."
    
    while [ $attempt -le $max_attempts ]; do
        if curl -f "http://${SERVER}/health" > /dev/null 2>&1; then
            echo "✅ Application is healthy!"
            return 0
        fi
        
        echo "⏳ Attempt ${attempt}/${max_attempts} - waiting for application to be ready..."
        sleep 10
        attempt=$((attempt + 1))
    done
    
    echo "❌ Health check failed after ${max_attempts} attempts"
    return 1
}

# Function to rollback deployment
rollback() {
    echo "🔄 Rolling back deployment..."
    docker-compose -f $COMPOSE_FILE down
    docker-compose -f $COMPOSE_FILE up -d --scale app=2
    
    if check_health; then
        echo "✅ Rollback successful"
    else
        echo "❌ Rollback failed"
        exit 1
    fi
}

# Trap errors and rollback
trap rollback ERR

# Pull latest image
echo "📥 Pulling latest Docker image..."
docker pull $DOCKER_IMAGE

# Update docker-compose with new image
export DOCKER_IMAGE
envsubst < $COMPOSE_FILE > docker-compose.tmp.yml

# Blue-green deployment
echo "🔄 Starting blue-green deployment..."

# Start new containers
docker-compose -f docker-compose.tmp.yml up -d --scale app=2 --no-recreate

# Wait for new containers to be ready
sleep 30

# Check health of new deployment
if check_health; then
    echo "✅ New deployment is healthy, switching traffic..."
    
    # Remove old containers
    docker-compose -f $COMPOSE_FILE down --remove-orphans
    
    # Move new compose file to active
    mv docker-compose.tmp.yml $COMPOSE_FILE
    
    echo "🎉 Deployment completed successfully!"
else
    echo "❌ New deployment failed health check"
    rollback
    exit 1
fi

# Cleanup old images
echo "🧹 Cleaning up old Docker images..."
docker image prune -f

echo "✨ Deployment to ${ENVIRONMENT} completed successfully!"
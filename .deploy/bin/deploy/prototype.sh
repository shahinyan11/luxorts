#!/bin/bash

source ".deploy/bin/variables.sh"
source ".deploy/bin/deploy/base_deploy.sh"

IMAGE_NAME="$PROJECT_NAME/prototype/server-app"
NODE_ENV="production"

NEXT_PUBLIC_API_HOST="https://prototype-api.rezofi.com"
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="AIzaSyDYemdkE3Aj5rKGUbe3k5nESe55-pzxgzc"

deploy \
  --region "$REGION" \
  --aws-access-key "$AWS_ACCESS_KEY_ID" \
  --aws-secret-key "$AWS_SECRET_ACCESS_KEY" \
  --image-name "$IMAGE_NAME" \
  --repo "$ECR_ID.dkr.ecr.$REGION.amazonaws.com/$IMAGE_NAME" \
  --cluster "$PROJECT_NAME-prototype" \
  --service "$PROJECT_NAME-prototype" \
  --running-tag "prototype" \
  --next-public-api-host "$NEXT_PUBLIC_API_HOST" \
  --next-public-google-maps-api-key "$NEXT_PUBLIC_GOOGLE_MAPS_API_KEY" \
  --node-env "$NODE_ENV" \
  --docker_file ".docker/staging.Dockerfile"

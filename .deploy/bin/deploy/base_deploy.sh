#!/bin/bash

set -e

deploy() {
  while [ $# -gt 0 ]
  do
    key="$1"

    case $key in
      --region)
        REGION="$2"
        shift
        shift
      ;;
      --aws-access-key)
        AWS_ACCESS_KEY_ID="$2"
        shift
        shift
      ;;
      --aws-secret-key)
        AWS_SECRET_ACCESS_KEY="$2"
        shift
        shift
      ;;
      --cluster)
        CLUSTER="$2"
        shift
        shift
      ;;
      --service)
        SERVICE="$2"
        shift
        shift
      ;;
      --image-name)
        IMAGE_NAME="$2"
        shift
        shift
      ;;
      --repo)
        REPO="$2"
        shift
        shift
      ;;
      --running-tag)
        RUNNING_TAG="$2"
        shift
        shift
      ;;
      --next-public-api-host)
        NEXT_PUBLIC_API_HOST="$2"
        shift
        shift
      ;;
      --next-public-google-maps-api-key)
        NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="$2"
        shift
        shift
      ;;
      --node-env)
        NODE_ENV="$2"
        shift
        shift
      ;;
      --docker_file)
        DOCKER_FILE="$2"
        shift
        shift
      ;;
      --skip-build)
        SKIP_BUILD="$2"
        shift
        shift
      ;;
      *)
        echo "Unknown option $1\n"
        shift
        shift
    esac
  done

  HASH_TAG="$(git rev-parse --short HEAD)"

  RUNNING_IMAGE=$REPO:$RUNNING_TAG
  CURRENT_IMAGE=$IMAGE_NAME:$HASH_TAG

  echo "Build docker image $CURRENT_IMAGE"
  push_to_docker

  echo "Deploy $CURRENT_IMAGE to $CLUSTER:$SERVICE"

  aws ecs update-service \
    --region $REGION --cluster $CLUSTER --service $SERVICE --force-new-deployment

  echo 'Deploy successfully finished'
}

push_to_docker() {
  if [ -n "$SKIP_BUILD" ]
  then
    echo "📦 Skip build"
  else
    aws ecr get-login-password --region $REGION | docker login --username AWS --password-stdin $REPO

    echo
    docker build --cache-from=$RUNNING_IMAGE \
                 --build-arg NODE_ENV=$NODE_ENV \
                 --build-arg NEXT_PUBLIC_API_HOST=$NEXT_PUBLIC_API_HOST \
                 --build-arg NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=$NEXT_PUBLIC_GOOGLE_MAPS_API_KEY \
                 -t $CURRENT_IMAGE \
                 -f $DOCKER_FILE .

    docker tag $CURRENT_IMAGE $REPO:$HASH_TAG
    docker tag $CURRENT_IMAGE $RUNNING_IMAGE

    docker push $REPO:$HASH_TAG
    docker push $RUNNING_IMAGE
  fi
}

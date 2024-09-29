# Stage: Builder
FROM node:17.6.0-alpine3.15 as builder

RUN apk add --update --no-cache python2 make g++

ARG NEXT_PUBLIC_API_HOST
ENV NEXT_PUBLIC_API_HOST $NEXT_PUBLIC_API_HOST

ARG NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
ENV NEXT_PUBLIC_GOOGLE_MAPS_API_KEY $NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

WORKDIR /app

COPY package.json yarn.lock ./
ADD ./public/static/ ./public/static/
RUN yarn install

COPY . .

RUN yarn build

# Stage: Final
FROM node:17.6.0-alpine3.15

RUN apk add --update --no-cache curl

WORKDIR /app

VOLUME ["/app/public/static"]

RUN yarn global add pm2

USER node
COPY --from=builder --chown=node:node /app ./

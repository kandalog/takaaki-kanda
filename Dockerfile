FROM node:22.14-bullseye

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g npm
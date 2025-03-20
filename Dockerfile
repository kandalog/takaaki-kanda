FROM node:22.14-bullseye

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g npm &&  npm install

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
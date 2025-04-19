# syntax=docker/dockerfile:1
FROM node:18-alpine

RUN apk add --no-cache openssh

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]

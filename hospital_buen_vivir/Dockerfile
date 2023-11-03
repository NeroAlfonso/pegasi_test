FROM node:20-alpine3.17
RUN apk add git
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD npm run start
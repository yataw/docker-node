FROM node:12

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

ENV TZ Europe/Moscow

CMD [ "node", "index.js" ]

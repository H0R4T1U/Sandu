FROM node:16

WORKDIR /usr/src/Sandu

COPY package*.json ./

RUN npm install

COPY . .

WORKDIR /usr/src/Sandu/src

CMD [ "node", "index.js" ]
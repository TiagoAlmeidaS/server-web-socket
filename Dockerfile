FROM node:16

RUN mkdir /app
ADD . /app
WORKDIR /app
RUN npm install

CMD [ "node", "app.js" ]

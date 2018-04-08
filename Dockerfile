# long term support for NodeJs
FROM node:9.4.0-alpine

RUN mkdir -p /app

# create app directory
WORKDIR /app

COPY . /app/
RUN npm install

# bind port 
EXPOSE 8080

# "npm start" when running docker
CMD [ "npm", "run", "dev" ]
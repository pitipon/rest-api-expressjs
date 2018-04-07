##### Objective
Simple example of NodeJS with Docker

##### How to use this image
Create a Dockerfile in your Node.js app project

```
# long term support for NodeJs
FROM node

# create app directory
WORKDIR /usr/src/app

####### install your app dependencies using the npm binary

# Install app dependencies
COPY package*.json ./
RUN npm install
# RUN npm install --only=production

# Bundle app source
COPY . .

# bind port 
EXPOSE 8080

# "npm start" when running docker
CMD [ "npm", "start" ]
```

You can build and run the Docker image:
```
$ docker build -t my-nodejs-app .
$ docker run -p 80:8080 -d --name my-running-app my-nodejs-app
```

- - -


##### Test with hello world docker 
https://hub.docker.com/r/pitipon/node-docker/
```
docker run -p 49160:8080 -d pitipon/node-docker
```
open browser > localhost:49160

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
CMD [ "npm", "run", "dev" ]
FROM node:23.4
RUN mkdir -p /usr/node-1/app 
WORKDIR /usr/node-1/app 
COPY package*.json .
RUN npm i

COPY . . 

CMD [ "npm", "run", "start:dev" ]
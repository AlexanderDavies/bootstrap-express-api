FROM node:14.15.0-alpine

WORKDIR /usr 

#copy package.json + yarn.lock or package-lock
COPY package.json yarn.lock ./

#install dependencies
RUN yarn install --production --prefer-offline

#copy src folder
COPY ./src ./src

RUN mkdir "/usr/logs"

#expose the port
EXPOSE 8080

#run as a non-privileged user

CMD ["node", "src/server.js"]
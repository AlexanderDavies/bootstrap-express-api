FROM node:12.13.1-alpine

WORKDIR /usr 

#copy package.json + yarn.lock or package-lock
COPY package.json yarn.lock ./

#install dependencies
RUN yarn install --production --prefer-offline

#copy src folder
COPY ./src ./src

RUN mkdir "/usr/logs"

#expose the port
EXPOSE 3000

# Run as a non-privileged user

CMD ["node", "src/server.js"]
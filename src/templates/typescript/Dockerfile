FROM node:12.16.3-alpine

WORKDIR /usr 

#copy package.json + yarn.lock or package-lock
COPY package.json yarn.lock ./

#install dependencies
RUN yarn install

#copy all other source code to work directory
ADD . .

#build
RUN npm run build:prod

RUN mkdir "/usr/logs"

#expose the port
EXPOSE 3000

#run as a non-privileged user
CMD ["node", "src/server.js"]
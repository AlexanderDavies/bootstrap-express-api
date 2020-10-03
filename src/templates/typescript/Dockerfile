FROM node:12.16.3-alpine

WORKDIR /usr 

#copy all files
COPY . .

#install dependencies
RUN yarn install

#build dependencies
RUN npm run build:prod

RUN mkdir "/usr/logs"

#expose the port
EXPOSE 3000

#run as a non-privileged user
CMD ["node", "src/dist/server.js"]
FROM node:14.15.0-alpine

WORKDIR /usr 

#copy all files
COPY dist .

COPY yarn.lock .

#expose the port
EXPOSE 3000

ENV NODE_ENV production
ENV SWAGGER_UI true

#run as a non-privileged user
CMD ["node", "bundle.js"]
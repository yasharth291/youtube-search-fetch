FROM node:14

LABEL MAINTAINER "Yasharth Dubey"
RUN apt-get update

WORKDIR /my-app

COPY package.json package.json
RUN npm i

ADD . .

CMD [ "npm". "start" ]

ENTRYPOINT ["node","server.js"]
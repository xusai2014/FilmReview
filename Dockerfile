FROM node:latest
MAINTAINER jerryxu <13048699388@163.com>
RUN mkdir -p /home/Service
WORKDIR /home/Service
COPY . /home/ubuntu/FilmReview
RUN  npm install
RUN  npm run start
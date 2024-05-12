# Description: Dockerfile for Angular application
# stark with node image
FROM node:alpine
# create app directory
WORKDIR /usr/src/app
# local directory to /usr/src/app in container
COPY . /usr/src/app
# install all dependencies
RUN npm install -g @angular/cli
RUN npm install
# start app
CMD ["ng", "serve", "--host", "0.0.0.0"]
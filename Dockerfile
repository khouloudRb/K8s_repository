FROM node:10 AS node
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 5000
CMD node server.js
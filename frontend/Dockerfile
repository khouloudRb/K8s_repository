FROM node:10 AS node
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 3000
CMD npm start
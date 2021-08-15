const dotenv = require("dotenv")
dotenv.config()

module.exports =
`mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@icinema-shard-00-00.4p2wg.mongodb.net:27017,icinema-shard-00-01.4p2wg.mongodb.net:27017,icinema-shard-00-02.4p2wg.mongodb.net:27017/main?ssl=true&replicaSet=Icinema-shard-0&authSource=admin&retryWrites=true&w=majority`;

//v1 ://"mongodb+srv://admin:7fx6wiDzAGOOm3ZH@icinema-4p2wg.mongodb.net/iCinema?retryWrites=true";

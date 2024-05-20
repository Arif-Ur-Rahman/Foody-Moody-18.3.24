require("dotenv").config();
const port = process.env.SERVER_PORT || 8080;
const MongoDBurl = process.env.MONGODB_ATLAS_URL;

module.exports = { port, MongoDBurl };

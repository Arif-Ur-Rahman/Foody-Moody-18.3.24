require("dotenv").config();
const port = process.env.SERVER_PORT || 8080;
const MongoDBurl = process.env.MONGODB_ATLAS_URL;
const defProfile =
  process.env.DEFAULT_PATH_USER_PROFILE || "../public/Images/users/def.png";

module.exports = { port, MongoDBurl, defProfile };

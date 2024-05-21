import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Define configuration settings
const port = process.env.SERVER_PORT || 8080;
const MongoDBurl = process.env.MONGODB_ATLAS_URL;
const defProfile =
  process.env.DEFAULT_PATH_USER_PROFILE || "../public/Images/users/def.png";

// Export configuration settings using ES module syntax
export { port, MongoDBurl, defProfile };

import express from "express";
import morgan from "morgan";
import { port } from "./secret.js"; // Ensure correct relative path and .js extension
import connectDB from "./config/db.js"; // Ensure correct relative path and .js extension
import seedRouter from "./routers/seedRouter.js"; // Ensure correct relative path and .js extension

// Initialize the express application
const app = express();

// Use morgan middleware for logging
app.use(morgan("dev"));

// Use JSON middleware for parsing JSON requests
app.use(express.json());

// Define routes
app.use("/api", seedRouter); // Ensure correct prefix for routes

app.get("/", (req, res) => {
  res.status(200).send({
    message: "API testing is working fine",
  });
});

// Start the server and connect to the database
app.listen(port, async () => {
  console.log(`Server is running at http://localhost:${port}`);
  await connectDB();
});

// Global error handling middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    success: false,
    message: err.message,
  });
});

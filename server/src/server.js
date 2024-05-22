import express from "express";
import morgan from "morgan";
import { port } from "./secret.js";
import connectDB from "./config/db.js";
import authRoute from "./routers/authRouter.js";
const app = express();
app.use(morgan("dev"));
app.use(express.json());

// api route
app.get("/api", (req, res) => {
  res.status(200).send({
    message: "API testing is working fine",
  });
});
app.use("/api/auth/", authRoute);

// api route end
app.listen(port, async () => {
  console.log(`Server is running at http://localhost:${port}`);
  await connectDB();
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    success: false,
    message: err.message,
  });
});

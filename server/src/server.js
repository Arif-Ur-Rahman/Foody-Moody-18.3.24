import express from "express";
import morgan from "morgan";
import port from "./secret";
import connectDB from "./config/db";
import seedRouter from "./routers/seedRouter";
app = express();
app.use(morgan("dev"));

app.use("api/", seedRouter);
app.get("/", (req, res) => {
  res.status(200).send({
    message: "Api testing is working fine",
  });
});
app.get("/api/user", (req, res) => {
  res.status(200).send({
    message: "Api testing is working fine",
  });
});

app.listen(port, async () => {
  console.log(`Server is running at http://localhost:${port}`);
  await connectDB();
});

// server handling all errors
app.use((err, req, res, next) => {
  return res.status(err.status || 500).json({
    success: false,
    message: err.message,
  });
});

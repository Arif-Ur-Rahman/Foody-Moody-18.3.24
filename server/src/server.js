const express = require("express"),
  app = express();
const morgan = require("morgan");
const { port } = require("./secret");
const connectDB = require("./config/db");
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.status(200).send({
    message: "Api testing is working fine",
  });
});

app.listen(port, async () => {
  console.log(`Server is running at http://localhost:${port}`);
  await connectDB();
});

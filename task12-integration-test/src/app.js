const express = require("express");
const usersRouter = require("./routes/users");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/users", usersRouter);

module.exports = app;

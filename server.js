import express from "express";

const app = express();

app.listen(8080, (req, res) => {
  res.json({ message: "Hello World" });
});

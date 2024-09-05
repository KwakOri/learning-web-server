import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json("Hello World");
});

app.listen(8080, (req, res) => {
  res.json({ message: "Hello World" });
});

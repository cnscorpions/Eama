import express from "express";

const app: express.Application = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});

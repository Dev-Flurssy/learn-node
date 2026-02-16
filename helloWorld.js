import express from "express";

const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("Welcome back to Coding!");
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

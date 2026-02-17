import express from "express";
import { getAll, getById, create, updateById, deleteById } from "./store.js";

const app = express();

app.use(express.json());
app.set("view engine", "ejs");

// GET all whispers
app.get("/api/whisper/v1", async (req, res) => {
  const whispers = await getAll();
  res.json(whispers);
});

// Render EJS page
app.get("/about", async (req, res) => {
  const whispers = await getAll();
  res.render("about", { whispers });
});

// GET whisper by ID
app.get("/api/whisper/v1/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const whisper = await getById(id);

  if (!whisper) {
    return res.status(404).send("Whisper not found");
  }

  res.json(whisper);
});

// CREATE whisper
app.post("/api/whisper/v1", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).send("Message is required");
  }

  const whisper = await create(message);
  res.status(201).json(whisper);
});

// UPDATE whisper
app.put("/api/whisper/v1/:id", async (req, res) => {
  const { message } = req.body;
  const id = parseInt(req.params.id);

  if (!message) {
    return res.status(400).send("Message is required");
  }

  await updateById(id, message);
  res.status(200).send("Whisper updated");
});

// DELETE whisper
app.delete("/api/whisper/v1/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const whisper = await getById(id);

  if (!whisper) {
    return res.status(404).send("Whisper not found");
  }

  await deleteById(id);
  res.status(204).send();
});

export { app };

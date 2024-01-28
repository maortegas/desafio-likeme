const express = require("express");
const { getPosts, addPosts } = require("../consultas.js");
const router = express.Router();

router.get("/posts", async (req, res) => {
  const results = await getPosts();
  res.json(results);
});

router.post("/posts", async (req, res) => {
  const { titulo, url, descripcion, likes } = req.body;
  await addPosts(titulo, url, descripcion, likes);
  res.send("Libro agregado");
});

module.exports = router;

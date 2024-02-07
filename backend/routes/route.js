const express = require("express");
const {
  getPosts,
  addPosts,
  updatePosts,
  deletePosts,
  validaPosts,
} = require("../consultas.js");


const router = express.Router();

router.get("/posts", async (req, res) => {
  try{
  const results = await getPosts();
  res.json(results);
  }
  catch (error){
   console.log(error);
  }
});

router.post("/posts", async (req, res) => {
  const { titulo, url, descripcion } = req.body;

  try {
    if (!titulo || !url || !descripcion) {
      res.status(400).json({ message: "Debe ingresar los parametros" });
      return;
    }
    await addPosts(titulo, url, descripcion);
    if (error) {
          throw error;
    }
    res.status(200).json({ message: "Datos agregados" });
    
  } catch (error) {
    console.log(error);
  }
});

router.put("/posts/like/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await updatePosts(id);
    if (error){
      throw error;
    }
    res.status(200).json({ message: "Like agregado" });
  } catch (error) {
    res.status(500).json({ message: "Error al agregar el like" });
  }
});

router.delete("/posts/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await deletePosts(id);
    res.status(200).json({ message: "Post eliminado" });
  } catch (error) {
    res.status(400).json({ message: "Error al eliminar el post" });
  }
});

module.exports = router;

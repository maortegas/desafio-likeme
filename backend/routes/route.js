const express = require("express");
const { closeComplete } = require("pg-protocol/dist/messages");
const { getPosts, addPosts } = require("../consultas.js");


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
  console.log(req.body);


    if (!titulo || !url || !descripcion ) {
        res.status(400).json({ message: "Debe ingresar los parametros" });
        return
    }
 
       await addPosts(titulo, url, descripcion);
       res.status(200).json({ message: "Datos agregados" });
   
});

module.exports = router;

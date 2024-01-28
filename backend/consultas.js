const pool = require("./config/db");


const getPosts = async () => {
  const { rows } = await pool.query("SELECT * FROM posts");
  console.log(rows);
  return rows;
};


const addPosts = async (titulo, img, descripcion,likes) => {
  const { rows } = await pool.query(
    "INSERT INTO posts (titulo, img, descripcion,likes) VALUES ($1, $2, $3, $4)",
    [titulo, img, descripcion, likes]
  );
  console.log("Post agregado");
  return rows;
};

module.exports = {
  getPosts,
  addPosts,
};

//Agregar libros

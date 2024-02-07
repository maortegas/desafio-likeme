const pool = require("./config/db");


const getPosts = async () => {
  const consulta = "SELECT * FROM posts order by id";
  const { rows } = await pool.query(consulta);
  
  return rows;
};

const addPosts = async (titulo, img, descripcion) => {

  const consulta =  "INSERT INTO posts (titulo, img, descripcion,likes) VALUES ($1, $2, $3, $4)";
  const value = [titulo, img, descripcion, 0];
  const { rows } = await pool.query(consulta, value);

  return rows;
};

const updatePosts = async (id) => {
  try {
      const consulta = "UPDATE posts SET likes = likes + 1 WHERE id = $1";
      const value=[id]
      const { rows } = await pool.query(consulta,value)

      return rows;
  } catch (error) {
    console.log(error);  }
}

const deletePosts = async (id) => {
  try {
    const consulta = "DELETE FROM posts WHERE id =$1";
    const value = [id];
    const { rows } = await pool.query(consulta, value);
    console.log("Post eliminado");
    
    return rows;
  } catch (error) {
    console.log(error);
  }
}

const validaPosts=async (id)=>{
  const consulta = "SELECT * FROM posts WHERE id = $1";
  const value = [id];
  const { rows } = await pool.query(consulta,value);
  

  return rows;
}
 

module.exports = {
  getPosts,
  addPosts,
  updatePosts,
  deletePosts,
  validaPosts
};
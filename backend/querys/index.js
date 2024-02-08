const selectAllPosts = `SELECT * FROM posts ORDER BY id;`;

const createNewPost = `INSERT INTO posts (titulo, img, descripcion) VALUES
    ($1, $2, $3) RETURNING *`;

const verifyPostExist = "SELECT * FROM posts WHERE id = $1";
const updatePost = "UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *";
const deletePost = "DELETE FROM posts WHERE id = $1 RETURNING * ";


module.exports = {
  selectAllPosts,
  createNewPost,
  verifyPostExist,
  updatePost,
  deletePost,
};

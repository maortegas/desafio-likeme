const selectAllPosts = `SELECT * FROM posts ORDER BY id;`;
const insertPost = `INSERT INTO posts (titulo, img, descripcion, likes) VALUES($1, $2, $3, $4) RETURNING *`;
const verifyPostExist = "SELECT * FROM posts WHERE id = $1";
const updatePost = "UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *";
const deletePost = "DELETE FROM posts WHERE id = $1 RETURNING * ";

module.exports = {
  selectAllPosts,
  insertPost,
  verifyPostExist,
  updatePost,
  deletePost,
};

const db = require("../config/db");
const {
  updatePost,
  selectAllPosts,
  deletePost,
  insertPost,
} = require("../querys");

const updatePostController = async (req, res, next) => {
  const { data } = req;
  const { post, postExist } = data;

  try {
    const values = [post.id];

    if (postExist) {
      const post_query = await db.query(updatePost, values);
      const postUpdated = post_query.rows[0];
      if (post) {
        res.status(200).json({
          status: "Success",
          msg: "Post updated",
          post: postUpdated,
        });
      }
    }
  } catch (error) {
    next(error);
  
  }
};

const getPostController = async (req, res, next) => {

  try {
    const {rows } = await db.query(selectAllPosts);
    
    if (rows.count==0){
        res.status(404).json({
          status: "Failed",
          msg: "No existen datos ",
         })
   
    }else{
         res.status(200).json(rows);
    }
  } catch (error) {
    next(error);
  }
};

const deletePostController = async (req, res, next) => {
  const { data } = req;
  const { post, postExist } = data;

  try {
    const values = [post.id];

    if (postExist) {
      const post_query = await db.query(deletePost, values);
      const postDelete = post_query.rows[0];
      if (post) {
        res.status(200).json({
          status: "Success",
          msg: "Post eliminado",
          post: postDelete,
        });
      }
    }
  } catch (error) {
    next(error);
  }
};


const insertPostController = async (req, res, next) => {
   const { titulo, url, descripcion } = req.body;

  try{
    const value = [titulo, url, descripcion, 0];
    const { rows } = await db.query(insertPost, value);
    res.status(200).json(rows);

  } catch (error) {
    next(error);
  }
};

module.exports = {
  updatePostController,
  getPostController,
  deletePostController,
  insertPostController,
};

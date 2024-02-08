const { updatePostController, getPostController, deletePostController } = require("../controllers");
const { updatePostMiddleware,deletePostMiddleware  } = require("../middlewares");

const router = require("express").Router();

router.put("/posts/like/:id", updatePostMiddleware, updatePostController);
router.delete("/posts/:id", deletePostMiddleware, deletePostController);
router.get("/posts", getPostController);

module.exports = router;

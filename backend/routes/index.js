const {
  updatePostController,
  getPostController,
  deletePostController,
  insertPostController,
} = require("../controllers");
const {
  verifyPostExistMiddleware,
  insertPostMiddleware,
} = require("../middlewares");

const router = require("express").Router();

router.put("/posts/like/:id", verifyPostExistMiddleware, updatePostController);
router.delete("/posts/:id", verifyPostExistMiddleware, deletePostController);
router.post("/posts", insertPostMiddleware, insertPostController);
router.get("/posts", getPostController);

module.exports = router;

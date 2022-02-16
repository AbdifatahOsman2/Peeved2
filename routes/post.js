const { Router } = require("express");

const postController = require("../controllers/post");

const { restrict, canModify } = require("../utils");

const postRouter = new Router();

postRouter.get("/", postController.getAllPosts);
postRouter.get("/:id", postController.getPostById);
postRouter.post("/new-post", restrict, postController.newPost);
postRouter.put("/update-post/:id", restrict, canModify, postController.updatePost);
postRouter.delete("/delete-post/:id", restrict, canModify, postController.destroyPost);

module.exports = postRouter;
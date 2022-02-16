const { Router } = require("express");
const userRouter = require("./user");
const postRouter = require("./post");
const commentRouter = require("./comment");

const apiRouter = new Router();

apiRouter.use("/comments", commentRouter);
apiRouter.use("/posts", postRouter);
apiRouter.use("/auth", userRouter);

module.exports = apiRouter;
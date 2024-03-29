import express from "express";
import userSessionsRouter from "./api/v1/userSessionsRouter.js";
import usersRouter from "./api/v1/usersRouter.js";
import clientRouter from "./clientRouter.js";
import buildsRouter from "./api/v1/buildsRouter.js";
import userDataRouter from "./api/v1/userDataRouter.js";
const rootRouter = new express.Router();
rootRouter.use("/api/v1/user-sessions", userSessionsRouter);
rootRouter.use("/api/v1/users", usersRouter);
rootRouter.use("/api/v1/builds", buildsRouter)
rootRouter.use("/api/v1/user", userDataRouter)
rootRouter.use("/", clientRouter);

export default rootRouter;
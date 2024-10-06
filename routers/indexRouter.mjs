import { Router } from "express";
import * as indexController from "../controllers/indexController.mjs";

const indexRouter = Router();

indexRouter.get("/", indexController.indexRouteGet);

indexRouter.get("/api", indexController.APIRouteGet);

indexRouter.post("/api/posts", indexController.createPostPost);

export default indexRouter;
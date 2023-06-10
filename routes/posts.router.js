import { Express } from "express";
import { Router } from "express";
const router = express.Router();

import controller from "../controller/posts.controller";

router.get("/", controller.getAll);

module.exports = router;

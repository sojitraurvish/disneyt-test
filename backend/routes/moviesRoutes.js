import express from "express"
import { MOVIES_CONTROLLERS } from "../controllers/moviesControllers.js";

const router=express.Router();

router.route("/:id").get(MOVIES_CONTROLLERS.getMovieById)

router.route("/").get(MOVIES_CONTROLLERS.getAllMovies)

export default router
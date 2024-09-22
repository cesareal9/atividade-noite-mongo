import express from "express";
import director_controler from "../controllers/director_controller.js";
import via_cep from "../middleware/via_cep.js";

const router = express.Router()

router.get("/", director_controler.index)
router.post("/", via_cep, director_controler.store)
router.get("/:id", director_controler.show)
router.put("/:id", director_controler.update)

export default router
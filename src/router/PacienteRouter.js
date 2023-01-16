import express from "express"
import PacienteController from "../controller/PacienteController.js"

const pacienteController = new PacienteController()
const router = express.Router()

router.get("/api/pacientes/:id", pacienteController.getOne)
router.get("/api/pacientes/", pacienteController.index)
router.post("/api/pacientes/", pacienteController.store)
router.put("/api/pacientes/:id", pacienteController.update)
router.delete("/api/pacientes/:id", pacienteController.remove)

export default router

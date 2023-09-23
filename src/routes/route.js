import { Router } from "express"
import {createTarefa, getAllTarefas, getTarefaById,deleteTarefa,updateTarefa,limparBanco } from "./controllers/TarefaController.js"

const router = Router()

router.get("/tarefas", getAllTarefas)
router.get("/tarefas/:id", getTarefaById)
router.post("/tarefas", createTarefa)
router.delete("/tarefas/:id", deleteTarefa)
router.put("/tarefas/:id", updateTarefa)
router.delete("/deletar-todas-as-tarefas", limparBanco)

export default router
import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import mongoose from "mongoose"
// import mainRouter from "./routes/route.js"
import {createTarefa, getAllTarefas, getTarefaById,deleteTarefa,updateTarefa,limparBanco } from "./controllers/TarefaController.js"

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
// app.use("/api", mainRouter)

const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASWWORD}@tarefas.wgabab5.mongodb.net/`;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

app.get("/tarefas", getAllTarefas)
app.get("/tarefas/:id", getTarefaById)
app.post("/tarefas", createTarefa)
app.delete("/tarefas/:id", deleteTarefa)
app.put("/tarefas/:id", updateTarefa)
app.delete("/deletar-todas-as-tarefas", limparBanco)




mongoose.connect(uri, options).then(() => {
    console.log('Conexão ao MongoDB bem-sucedida');
  })
  .catch((error) => {
    console.error('Erro na conexão ao MongoDB:', error);
  });

  app.listen(process.env.PORT)
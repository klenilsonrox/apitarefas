import mongoose from "mongoose";


const tarefaSchema = new mongoose.Schema({
    tarefa:String
})


const Tarefa= mongoose.model("Tarefa", tarefaSchema)

export default Tarefa
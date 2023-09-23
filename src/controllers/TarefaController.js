import Tarefa from "../models/TarefasModel.js"


    export const  getAllTarefas = async(req,res)=>{
        let TarefasEncontradas;
    try{
        TarefasEncontradas = await Tarefa.find({})
    }catch(error){
       res.status(500).json({error:error}) 
    }
    if(!TarefasEncontradas){
        res.status(404).json({message:"Nenhuma tarefa foi encontrada"})
    }
    res.status(200).json({TarefasEncontradas})
    }

    
    export const createTarefa = async (req,res)=>{
        const {tarefa}=req.body
        const tarefaa= {tarefa}
        try{
            if(tarefa){
                await Tarefa.create(tarefaa)
            }
        }catch(error){
            res.status(500).jons({error:error.message})
        }
        return res.status(200).json({tarefaa})
      }


      export const getTarefaById = async (req, res) => {
        const { id } = req.params;
        try {
            const tarefaEncontrada = await Tarefa.findById(id);
            if (!tarefaEncontrada) {
                return res.status(404).json({ error: "Tarefa não encontrada" });
            }
            return res.status(200).json({ tarefaEncontrada });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    };


    export const deleteTarefa = async (req, res) => {
        const { id } = req.params;
        try {
            const tarefaEncontrada = await Tarefa.findByIdAndRemove(id);
            if (!tarefaEncontrada) {
                return res.status(404).json({ error: "Tarefa não encontrada" });
            }
            return res.status(200).json({message:"Tarefa deletada com sucesso"});
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    };
    
    export const updateTarefa = async (req, res) => {
        const {id}= req.params
        const { tarefa } = req.body;
        try {
            const tarefaEncontrada = await Tarefa.findByIdAndUpdate(id, req.body, {new:true})
            if (!tarefaEncontrada) {
                return res.status(404).json({ error: "Tarefa não encontrada" });
            }
            return res.status(200).json({tarefa});
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    };

    export const limparBanco = async (req, res) => {
        try {
            // Use o método deleteMany() para deletar todas as tarefas
            const result = await Tarefa.deleteMany({});
            res.status(200).json({ message: `Foram deletadas ${result.deletedCount} tarefas` });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }


import TODO from "./models/TodoModel"
import mongoose from "mongoose"

export const createTodo = async(req, res) => {
    const {task,status} = req.body
    try{
      const todo = await mongoose.TODO.create({
        task:task,
        status:status
    })
    res.status(200).json(todo)
    }catch (error){
        res.status(500).json({
            error:error
    })
    }
}

export const getAllTodos = async(req, res) => {
    
    try{
      const todos = await TODO.find()
      res.status(200).json(todos)
    }catch (error){
        res.status(500).json({
            error:error
    })
    }
}

export const deleteTodo = async(req, res) => {
    
    try{
      const {id} = req.params
      const todo = await TODO.findByIdAndDelete(id)
      if (!todo){
        res.status(404).json({
            message:"Todo not found"
        })
      }
      res.status(200).json("deleted successfully")
    }catch (error){
        res.status(500).json({
            error:error
    })
    }
}
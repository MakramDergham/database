import express from 'express';
import { createTodo, getAllTodos, deleteTodo } from '../controllers/todoControllers';

const router = express.Router();
router.post('/', createTodo)
router.get("/", getAllTodos);
router.delete('/:id', deleteTodo);

export default router;
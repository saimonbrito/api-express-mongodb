import express from "express";

import { LivroController } from "../controller/livroController.js";


 const router = express.Router();

   router.get('/livros', LivroController.listarLivros);
   router.get('/livros/busca' , LivroController.BuscarLivrosPorEditora)
   router.get('/livros/:id', LivroController.listarLivroId);
   router.post('/livros', LivroController.cadastrarLivros);
   router.put('/livros/:id', LivroController.atualizarLivroId);
   router.delete('/livros/:id', LivroController.deletarLivro);

export default router;
import express from "express";

import { LivroController } from "../controller/livroController.js";


 const router = express.Router();

   router.get('/livros', LivroController.listarLivros);

export default router;
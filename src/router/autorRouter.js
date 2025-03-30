import express from "express";

import { AutorController } from "../controller/autorController.js";


 const router = express.Router();

   router.get('/autor', AutorController.listarAutor);
   router.get('/autor/:id', AutorController.listarAutorId);
   router.post('/autor', AutorController.cadastrarAutor);
   router.put('/autor/:id', AutorController.atualizarAutor);
   router.delete('/autor/:id', AutorController.deletarAutor);

export default router;
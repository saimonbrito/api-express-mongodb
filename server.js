 import "dotenv/config";

import express from 'express'
import ConectDatabase from './src/config/ConectDatabase.js';
import routes  from "./src/router/index.js";


const app = express()

const Port = 3000;

const conexao = await ConectDatabase();

conexao.on('error', (erro) => {
  console.log('erro de conexão', erro)
});

conexao.once('open', () => {
  console.log('conexão com bamco feita com secesso');
})


routes(app);

app.listen(Port, () => {
  console.log('server rodando...')
})
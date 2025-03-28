 import "dotenv/config";

import express from 'express'
import ConectDatabase from './src/config/ConectDatabase.js';
import routes  from "./src/router/index.js";


const app = express()
const port = 3000


const conexao = await ConectDatabase();

conexao.on('error', (erro) => {
  console.log('erro de conexão', erro)
});

conexao.once('open', () => {
  console.log('conexão com bamco feita com secesso');
})


routes(app);



app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user')
  })

app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user')
  })




app.listen(port, () => {
  console.log(`server rodando porta : ${port}`)
})
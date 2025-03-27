import "dotenv/config";

import express from 'express'
import ConectDatabase from './ConectDatabase.js'


const app = express()
const port = 3000


const conexao = await ConectDatabase();

conexao.on('error', (erro) => {
  console.log('erro de conexão', erro)
});


conexao.once('open', () => {
  console.log('conexão com bamco feita com secesso');
})


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
    res.send('Got a POST request')
  })

app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user')
  })

app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user')
  })




app.listen(port, () => {
  console.log(`server rodando porta : ${port}`)
})
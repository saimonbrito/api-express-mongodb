import express from 'express';
import livro from './livrosRouter.js';

const routes = (app) =>{
    app.route('/').get((req,res)=> 
        res.status(200)
           .send ('Curso de API Node.js')
    );

    app.use(express.json(), livro)
}

export default routes
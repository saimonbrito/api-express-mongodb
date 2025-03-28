import livro from '../model/Livros.js';


export class LivroController {
      
    static async listarLivros(req, res){
        const listarLivros = await livro.find({});
        res.status(200).json(listarLivros);
    }

    static async  cadastrarLivros (req, res){
        try {
            const novoLivro = await livro.create(req.body);
            res.status(2001).json(
                {
                   message:' criado com sucesso',
                   livro: novoLivro
                });
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha ao cadastrar livros`});
        }
    }



};


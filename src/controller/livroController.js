import livro from '../model/Livros.js';


export class LivroController {
      
    static async listarLivros(req, res){
    
        try {
            const listarLivros = await livro.find({});
            res.status(200).json(listarLivros);
        } catch (error) {
            res.status(500).json({message: `${erro.message} - falha ao listar livros`});
        }
    }

    static async listarLivroId(req, res){
    
        try {
            const id = req.params.id;
            const LivroId = await livro.findById(id);
            res.status(200).json(LivroId);
        } catch (error) {
            res.status(500).json({message: `${erro.message} - falha ao buscar livro`});
        }
    }

    static async cadastrarLivros (req, res){
        try {
            const novoLivro = await livro.create(req.body);
            res.status(201).json(
                {
                   message:' criado com sucesso',
                   livro: novoLivro
                });
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha ao cadastrar livros`});
        }
    }


    static async atualizarLivroId(req, res){
    
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id,req.body);
            res.status(200).json({message:'livro atualizado'});
        } catch (error) {
            res.status(500).json({message: `${erro.message} - falha ao atualizar livros`});
        }
    }


    static async deletarLivro(req, res){
    
        try {
            const id = req.params.id;
           await livro.findByIdAndDelete(id);
            res.status(200).json({message:'livro excluido'});
        } catch (error) {
            res.status(500).json({message: `${erro.message} - falha ao deletar um livro`});
        }
    }

};


import {autor} from '../model/Autor.js'


export class AutorController {
      
    static async listarAutor(req, res){
    
        try {
            const listarAutor = await autor.find({});
            res.status(200).json(listarAutor);
        } catch (error) {
            res.status(500).json({message: `${erro.message} - falha ao listar autores`});
        }
    }

    static async listarAutorId(req, res){
    
        try {
            const id = req.params.id;
            const AutorId = await autor.findById(id);
            res.status(200).json(AutorId);
        } catch (error) {
            res.status(500).json({message: `${erro.message} - falha ao buscar autor`});
        }
    }

    static async cadastrarAutor(req, res){
        try {
            const novoautor= await autor.create(req.body);
            res.status(201).json(
                {
                   message:' criado com sucesso',
                   autor: novoautor
                });
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha ao cadastrar autores`});
        }
    }


    static async atualizarAutor(req, res){
    
        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id,req.body);
            res.status(200).json({message:'autor atualizado'});
        } catch (error) {
            res.status(500).json({message: `${erro.message} - falha ao atualizar autor`});
        }
    }


    static async deletarAutor(req, res){
    
        try {
            const id = req.params.id;
           await autor.findByIdAndDelete(id);
            res.status(200).json({message:'autor excluido'});
        } catch (error) {
            res.status(500).json({message: `${erro.message} - falha ao deletar um autor`});
        }
    }

};


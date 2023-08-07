import Autores from "../models/Autor.js";

class AutorController {
    static listarAutores = (req, res) => {
        Autores.find((err, Autores) => {
            res.status(200).json(Autores);
    })
}

static listarAutorPorId = (req, res) => {
    const id = req.params.id;
    Autores.findById(id, (err, Autores) => {
        if(err){
            res.status(400).send({message: `${err.message} - id do Autor não localizado. `})
        }else{
            res.status(200).send(Autores);
        }
    })
} 


static cadastrarAutor = (req, res) => {
    let autor = new Autores(req.body);
    autor.save((err) => {
        if(err){
            res.status(500).send({message: `${err.message} - falha ao cadastrar Autor.`})
        }else{
            res.status(201).send(autor.toJSON());
        }
    });
}


static atualizarAutor = (req, res) => {
    const id = req.params.id;

    Autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
        if(!err){
            res.status(200).send({message: 'Autor atualizado com sucesso'})
        }else{
            res.status(500).send({message: err.message})
        }
    })
}

static excluirAutor = (req, res) =>{
    const id = req.params.id;

    Autores.findByIdAndDelete(id, (err) => {
        if(!err){
            res.status(200).send({message: 'Autor de deletado com sucesso'})
        }else{
            res.status(500).send({message: err.message})
        }
    })
    
}
}

export default AutorController;
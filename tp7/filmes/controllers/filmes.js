var Filme = require('../models/filme')

const Filmes = module.exports

Filmes.listar = () => {
    return Filme
        .find()
        .sort({title: 1})
        .limit(100)
        .exec()
}

Filmes.consultar = id => {
    return Filme
        .findOne({_id: id})
        .exec()
}

Filmes.adicionar = body => {
    var filme = new Filme(body)
    filme.save()
    return Filme
        .find()
        .exec()
}

Filmes.apagar = id => {
    Filme
        .deleteOne({_id: id})
        .exec()
    return Filme
        .find()
        .exec()
}

Filmes.editar = filme => {
    return Filme
        .findOneAndUpdate({_id: filme._id}, filme, {new: true})
}
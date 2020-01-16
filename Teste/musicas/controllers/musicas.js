var Musica = require('../models/musicas')

module.exports.listarDeMusica = () => {
    return Musica
        .find({},{'_id':1, 'titulo':1, 'tipo':1, 'compositor':1})
        .exec()
}

module.exports.listarObraPorID = (id) => {
    return Musica
        .find({_id: id})
        .exec()
}

module.exports.listarTipos = () => {
    return Musica
        .find()
        .distinct('tipo')
        .exec()
}

module.exports.listarCompositorX = (compositor) => {
    return Musica
        .find({compositor: compositor})
        .exec()
}

module.exports.listarArquivosPorInstrumento = (inst) => {
    return Musica
        .aggregate(
            [{$unwind: "$instrumentos"},
            {$match:{'instrumentos.designacao':inst}}]
        )
}

module.exports.listarQuant = () => {
    return Musica
        .aggregate(
            [{$unwind: "$instrumentos"},
            {$group:{_id:"$_id",titulo:{"$first":"$titulo"},partituras:{$sum:1}}}]
        )
}

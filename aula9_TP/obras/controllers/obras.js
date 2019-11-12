var Obra = require('../models/obras')

module.exports.listar = () => {
    return Obra
        .find()
        .exec()
}

module.exports.consultarObra = id => {
    return Obra
        .findOne({_id: id})
        .exec()
}

module.exports.listarCompositores = () => {
    return Obra
        .find()
        .distinct('compositor')
        .exec()
}

module.exports.listarPeriodos = () => {
    return Obra
        .find()
        .distinct('periodo')
        .exec()
}

module.exports.consultarPorAno = ano => {
    return Obra
        .find({anoCriacao: ano})
        .exec()
}

module.exports.consultarCompositorPorDuracao = (compositor, duracao) => {
    return Obra
        .find({compositor: compositor, duracao: duracao})
        .exec()
}

module.exports.consultarPorPeriodo = periodo => {
    return Obra
        .find({periodo: periodo})
        .exec()
}
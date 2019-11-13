var Nobel = require('../models/nobel')

module.exports.listar = () => {
    return Nobel
        .find({},{'_id':0, 'year':1, 'category':1})
        .exec()
}

module.exports.consultar = id => {
    return Nobel
        .findOne({_id: id})
        .exec()
}

module.exports.listarCategoria = () => {
    return Nobel
        .find({},{'_id':0, 'category':1})
        .distinct('category')
        .exec()
}

module.exports.consultarCategoria = category => {
    return Nobel
        .find({category: category})
        .exec()
}

module.exports.consultarCategoriaPorAno = (category, year) => {
    return Nobel
        .find({category: category, year: year})
        .exec()
}

module.exports.listarLaureados = () => {
    return Nobel
        .aggregate([
            {$unwind:"$laureates"},
            {$project:{name: {$concat:["$laureates.firstname"," ","$laureates.surname"]},premio:{year:"$year",category:"$category"}}},
            {$group:{_id:"$name",premios:{$push:"$premio"}}},
            {$sort:{name:1}}
        ])
        .exec()
}

const mongoose = require('mongoose')

var partituraSchema = new mongoose.Schema({
    voz: String,
    path: String,
    clave: String,
    afinacao: String
})

var instrumentosSchema = new mongoose.Schema({
    designacao: String,
    partitura: [partituraSchema] 
})
var hrefSchema = new mongoose.Schema({
    href: String
})
var videoSchema = new mongoose.Schema({
    video: [hrefSchema]
})

var musicasSchema = new mongoose.Schema({
    id: String,
    titulo: String,
    tipo: String,
    compositor: String,
    inf_relacionada: [videoSchema],
    instrumentos: [instrumentosSchema]

})



module.exports = mongoose.model('musicas', musicasSchema)

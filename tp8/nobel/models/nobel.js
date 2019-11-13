const mongoose = require('mongoose');

var laureate = new mongoose.Schema({
    id: String,
    firstname: String,
    surname: String,
    motivation: String,
    share: String
})

var nobelSchema = new mongoose.Schema({
    year: String,
    category: String,
    overallMotivation: String,
    laureates: [laureate]
})

module.exports = mongoose.model('nobel', nobelSchema)
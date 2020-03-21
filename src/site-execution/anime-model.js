const mongoose = require("mongoose")

const schema =  mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    nomeSite: {
        type : String,
        required: true
    },
    urlAnime: {
        type: String
    },
    nomeAnime: {
        type: String,
        required: false
    },
    numeroEpisodio: {
        type: Number,
        required: false
    },
    formato: {
        type: String,
        required: false
    },
    dataAtual: {
        type: Date,
        required: false
    }

    
})

const animeModel = mongoose.model('anime' , schema)  

module.exports = animeModel


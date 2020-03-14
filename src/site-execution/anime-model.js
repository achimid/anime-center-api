const mongoose = require("mongoose")

const schema = mongoose.Schema({
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
        required: true
    },
    numeroEpisodio: {
        type: Number,
        required: true
    },
    formato: {
        type: String
    },
    dataAtual: {
        type: Date
    }
})
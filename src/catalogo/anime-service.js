const animeModel = require("./anime-model")



const salvar =  (anime) => {
    informacao = new animeModel(anime)
    return informacao.save()
}

const buscaAnime = () => animeModel.find()

module.exports = {
    salvar,
    buscaAnime
}
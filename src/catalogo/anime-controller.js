const express = require("express")
const router = express.Router()
const service = require('./anime-service')

const executeRequest =  (dadoAnime, res) => {

    service.salvar(dadoAnime)
        .then(() => res.json()) 
        .catch((err) => console.log(err))
}


router.post('/salvar',  (req, res) => executeRequest(req.body, res))

router.get('/lista', async (req, res) => {    
    service.buscaAnime()
        .then(listaAnimes => res.json(listaAnimes))
        .catch((err) => console.log(err))
})

module.exports = router

//     service.salvaInformacao(new salvaInformacao(data))
// .then(response => res.json(response))
// .catch(error => res.send(error))
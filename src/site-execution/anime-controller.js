const express = require("express")
const router = express.Router()
const service = require('./anime-service')

const executeRequest = (dadoAnime, res) => {
    service.salvaInformacao('dados')
    res.json()
}


router.post('/salvar',  (req, res) => executeRequest(req.body, res))


module.exports = router

//     service.salvaInformacao(new salvaInformacao(data))
// .then(response => res.json(response))
// .catch(error => res.send(error))
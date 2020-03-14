const express = require("express")
const router = express.Router()
const service = require('./anime-service')

const executeRequest = (req, res) => {

    anime-service.salvaInformacao('dados')
}


router.post('/',  async (req, res) => executeRequest(req.body, res))


module.exports = router

//     service.salvaInformacao(new salvaInformacao(data))
// .then(response => res.json(response))
// .catch(error => res.send(error))
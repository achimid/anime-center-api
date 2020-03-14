const express = require("express")
const router = express.Router()
const service = require('./se-service')

const executeRequest = (req, res) => {

    service.execute(new SiteRequestModel(data))
        .then(response => res.json(response))
        .catch(error => res.send(error))
}


router.post('/',  async (req, res) => executeRequest(req.body, res))


module.exports = router

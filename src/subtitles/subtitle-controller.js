const router = require("express").Router()
const service = require('./subtitle-service')

router.post('/receive', async (req, res) => {    
    console.log('chamou aki')
    service.onNotificationRecieve(req.body)
    res.status(200).send()
})

module.exports = router

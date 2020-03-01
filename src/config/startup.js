const databaseInit = require('./database')
const { socketInit } = require('../utils/socket-util')
const healthCheckJob = require('../healthcheck/healthcheck-job')

const init = () => {
    databaseInit()
    socketInit()
    healthCheckJob()
}

module.exports = init

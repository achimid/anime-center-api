const healthcheck = require('../healthcheck/healthcheck-controller')
const animeControler = require('../site-execution/anime-controller')

const prefix = process.env.API_PREFIX + process.env.API_VERSION

module.exports = (app) => {
    console.info('Registrando rotas...')

    app.use(`${prefix}`, healthcheck)
    app.use(`${prefix}/anime`, animeControler)

}
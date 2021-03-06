const cron = require('node-cron');

const schedule = (callback, time) => new Promise((resolve, reject) => {
    cron.schedule(time || '*/3 * * * *' , () => {
        console.log('Iniciando execução do Job')
        try {
            console.log('============>>>>>', callback)
            resolve(callback())
        } catch (error) {
            console.error('Erro ao executar o Job', error)
            reject(error)
        }
        console.log('Finalizando execução do Job')
    })    
})

module.exports = schedule
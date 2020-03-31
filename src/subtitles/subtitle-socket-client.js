const fetch = require('node-fetch')
const socket = require('socket.io-client')(process.env.MKV_EXTRACT_API, { transports: ['websocket'] })

socket.on('reconnect_attempt', () => { socket.io.opts.transports = ['polling', 'websocket']})

socket.on('connect', () => console.info('Socket conectado ao servidor'))

socket.on('disconnect', () => console.info('Socket desconectado do servidor'))

const onExtractionDone = (EXTRACTION_ID, callback) => socket.on(`${EXTRACTION_ID}_DONE`, callback)

module.exports = {
    onExtractionDone
}
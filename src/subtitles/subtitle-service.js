const fetch = require('node-fetch')
const socket = require('socket.io-client')(process.env.MKV_EXTRACT_API, { transports: ['websocket'] })

socket.on('reconnect_attempt', () => { socket.io.opts.transports = ['polling', 'websocket']})

socket.on('connect', () => console.info('Socket conectado ao servidor'))

socket.on('disconnect', () => console.info('Socket desconectado do servidor'))


const onNotificationRecieve = async (data) => {

    console.log(data)

    const links = data.lastExecution.extractedContent.filter(s => (s || '').indexOf('magnet') >= 0)

    links.map(magnetLink => {
        const body = { magnetLink, langTo: "pt", ignoreCache: true }   

        fetch(process.env.MKV_EXTRACT_API + '/api/v1/extract', {
            method: 'post',
            body:    JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then(json => onExtractionDoneHandler(json._id))        
    })  

}

const onExtractionDoneHandler = (EXTRACTION_ID) => socket.on(`${EXTRACTION_ID}_DONE`, onExtractionDone)

const onExtractionDone = ({body}) => {
    console.log('Legenda Traduzida', body.subtitles)
    // TODO: Salvar as legendas traduzidas
}

module.exports = {
    onNotificationRecieve
}
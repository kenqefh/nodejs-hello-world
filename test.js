const events = require('events');
const { emit } = require('process');
const emitter = new events.EventEmitter();

emitter.on('eventoCustom', (message, status) => {
    console.log(`${status}: ${message}`)
})

emitter.emit('eventoCustom', 'Message load ok', 200)
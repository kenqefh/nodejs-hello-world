//import { Persona } from './libs/Persona';     // It does not work
const Persona = require('./libs/Persona');

var pablo = new Persona('Pablo')

pablo.on('habla', (mensage) => {
    console.log(`${pablo.nombre}: ${mensage}`)
})

pablo.emit('habla', 'Hoy fue un gran día')
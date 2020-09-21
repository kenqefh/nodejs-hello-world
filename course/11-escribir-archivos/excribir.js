const fs = require('fs');
const path = require('path');

const archivo = path.resolve(__dirname, 'test.txt')

/** 
 * primero validar si existe el archivo 
 */
/** Forma 1 */
console.log(`El archivo ${fs.existsSync(archivo) ? 'SI' : 'NO'} existe`);
/** Froma 2 */
fs.access(archivo, fs.constants.F_OK, (err, data) => {
    console.log(`El archivo ${err ? 'NO' : 'SI'} existe.`);
})

/**
 * Escribir en un archivo
 */
let contenido = 'Elit laboris consequat tempor reprehenderit eiusmod.'
/**Forma Syncrona */
fs.writeFileSync(archivo, contenido)
console.log('Se ha escrito el archivo!');
/**Forma aSync */
fs.writeFile(archivo, contenido, (err) => {
    if (err)
        throw ('Hubo un error al escribir en el archivo')
    console.log('Se ha escrito el archivo correctamente');
})

/**
 * Add content to file
 */
fs.appendFile(archivo, contenido, 'utf-8', (err) => {
    if (err)
        throw ('No se pudo agregar el contenido al archivo')
    console.log('Se ha agregado el contenido al archivo correctamente');
})
const fs = require('fs');
const path = require('path');

const file_path = (url_file) => path.resolve(__dirname, url_file)
const file_dir = file_path('./texto.txt')
const folder_dir = file_path('./')

/**
 * Primero se ejecutarán lo Sync, luego los Async
 */
fs.readFile(file_dir, 'utf-8', (err, data) => {
    if (err)
        throw err
    console.log('readFile: ', data);
})

fs.readdir(folder_dir, (err, files) => {
    if (err)
        throw err
    console.log('readdir: ', files);

})

const files = fs.readdirSync(folder_dir) // consume el proceso principal
console.log('readdirSync: ', files);

let archivo = fs.readFileSync(file_dir, 'utf-8')
console.log('readFileSync: ', archivo);

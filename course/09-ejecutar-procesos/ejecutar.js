const exec = require('child_process').exec

exec('./script.sh 4 5', (err, stdout) => {
    if (err) {
        throw err;
    }
    console.log('comando ejecutado');
    console.log(stdout)
})
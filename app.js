const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs')
require('colors');
console.clear();

console.log('base: yargs', argv.b);

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, ' creado') )
    .catch(err=> console.log(err))

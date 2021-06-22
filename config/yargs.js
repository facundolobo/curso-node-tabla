const argv = require('yargs')
        .option('b',{
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: ' El la base de la tabla de multiplicar'
        })
        .option('l',{
            alias: 'listar',
            type: 'boolean',
            default: false,
            describe:'muestra la tabla en consola'
        })
        .option('h',{
            alias: 'hasta',
            type: 'number',
            default: 10,
            describe:'Hasta donde se creara la tabla'
        })
        .check((argv, options) => {
            if(isNaN(argv.b)){
                throw 'La base tiene que ser un número'
            }
            return true; //si no hay errores entonces devuelve true
        })
        .argv;

module.exports= argv;
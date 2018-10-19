//requerir la dependencia jwt-simple para crear el token

var token = require("jwt-simple");

//requerir la dependencia moment que hace registro de fecha de creacion y expiracion del token

var momento =require("moment");

//para crear el token se necesita una clave secreta para poder descodificar el token

var claveSecreta = "clave_secreta";

/*=================================
        Método del token
===================================*/
//el token se va a crear cada vez que se ingrese un usuario al sistema
exports.crearToken = function(seleccionUsuario){
    
    //datos que vamos a codificar
    
    var cargarToken = {
        //codificar el id de ese documento
        sub: seleccionUsuario._id, //o usuario._id
        //codificar nombre del usuario
        nombre: seleccionUsuario.usuario, //o usuario.usuario
        //fecha creacion del token, unix() formato timestamp actual
        now: momento().unix(),
        //fecha expiracion token es de 30 dias
        exp: momento().add(30, "days").unix()
    }
    //devolver el token codificado, ir al controlador del usuario
    return token.encode(cargarToken, claveSecreta);
}


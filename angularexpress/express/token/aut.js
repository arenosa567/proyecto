var token = require("jwt-simple");
var momento = require("moment");
var claveSecreta = "clave_secreta";
/*==================================
    METODO DE AUTENTIFICACION
====================================*/

//creamos el middleware(logica de intercambio de información entre aplicaciones)

exports.autentificacion = function(req, res, next){
    //pasamos el token por una cabecera de autentificacion
    
    if(!req.headers.authorization){
        
        return res.status(403).send({mensaje: "La petición no tiene la cabecera de autentificación"})
    }else{
        /*eliminamos las comillas simples y dobles al token con el método replace */
          var tokenEnviado = req.headers.authorization.replace(/['"]+/g, ''); 
        //try catch sentencia de manejo se excepciones
        /*la sentencia try...catch marca un bloque de instrucciones a intentar que pueden causar alguna excepción, y declarar una o más respuestas en caso de que una excepción sea arrojada. si una excepcion es arrojado, la sentencia try....catch se encarg de atraparla*/
        
        //un bloque try es usado para probar una sentencia
        
        try{
           
            var cargarToken = token.decode(tokenEnviado, claveSecreta);
            //comparar la fecha actual con la expiración del token
            
            if(cargarToken.exp <= momento().unix()){
                
                return res.status(403).send({mensaje: "El token ha expirado"})
            }
           /*un bloque catch es usuado para capturar todas las excepciones */ 
        }catch(excepcion){
            
            console.log(excepcion);
            return res.status(403).send({mensaje: "El token no es válido"})
        }
        
        /*añadimos el bojeto request una propiedad de usuario para siempre tener disponible el token en cualquier sesión. Con esto no tenemos que estar decodificando el token en cada sesion que ingrese el usuario*/
        req.usuarioToken = cargarToken;
        next();
    }
}


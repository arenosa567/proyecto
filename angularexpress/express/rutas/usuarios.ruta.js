
var express = require("express");
//cargamos el modulo del controlador

var ControladorUsuarios = require("../controladores/usuarios.controlador.js");

//cargar el router expres.js, con esto podemos crear rutas para apirest

var api = express.Router();

/*para que funcione el token y salga el mensaje probando controlador de usuarios debemos traer el token autenticado o la cabecera HTTP*/

var md_aut=require("../token/aut.js");

/*crear la ruta con el metodo get(leer) para pasar el metodo que va a tener que cargar la página, cuando hagamos la peticion HTTP de esa ruta*/
api.get("/probando-controlador-usuarios", md_aut.autentificacion, ControladorUsuarios.pruebaUsuarios);

//creamos la ruta para crear usuarios y utilizamos el metodo post

api.post("/crearusuarios", ControladorUsuarios.crearUsuarios);
/*crear la ruta del ingreso de usuario cuando se crea el usuario vamos a comparar con lo que esta en la base de datos, si coincide con la bd se le da permisos para que vaya a la pagina loqueada*/

api.post("/login", ControladorUsuarios.ingresoUsuario);

//crea la ruta para la actualización del usuario y utilizamos el metodo put

api.put("/actualizar-usuario/:id", md_aut.autentificacion, ControladorUsuarios.actualizarUsuario);

//crea la ruta para borrar usuarios, com metodo delete

api.delete("/borrar-usuario/:id",md_aut.autentificacion, ControladorUsuarios.borrarUsuario);



//Exportamos el modulo api
module.exports = api;


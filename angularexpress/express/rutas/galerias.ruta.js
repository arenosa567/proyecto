
var express = require("express");
var ControladorGalerias = require("../controladores/galerias.controlador.js");

//cargar el router expres.js, con esto podemos crear rutas para apirest
var api = express.Router();
//cargamos la dependencia para subir ficheros
var multipart = require("connect-multiparty");
 var fichero =multipart({
     uploadDir: "./ficheros/galeria"
 }) 
 //traemos el token 
 var md_aut=require("../token/aut.js");
api.get("/probando-controlador-galerias", ControladorGalerias.pruebaGalerias);
api.post("/crear-foto", [md_aut.autentificacion, fichero], ControladorGalerias.crearFoto);
api.get("/mostrarFotos", ControladorGalerias.mostrarFotos);
api.delete("/borrarfoto/:id",  md_aut.autentificacion, ControladorGalerias.borrarFoto);
//visualice la imagen en el navegador a traves de su url
api.get("/tomarimagengaleria/:foto", ControladorGalerias.tomarImagenGaleria);
//Exportamos el modulo api
module.exports = api;


//cargamos la dependencia del express
var express = require("express");
//cargamos el modulo del controlador

var ControladorSlides = require("../controladores/slides.controlador.js");

//cargar el router expres.js, con esto podemos crear rutas para apirest

var api = express.Router();

//cargamos la dependencia para subir ficheros
var multipart = require("connect-multiparty");
//crear la variable que nos carge esa dependencia
 var fichero =multipart({
     //la carpeta o ruta donde va ir los ficheros subidos
     uploadDir: "./ficheros/slide/"
 }) 
 //traemos el token autenticado
 var md_aut=require("../token/aut.js");

/*crear la ruta con el metodo get(leer) para pasar el metodo que va a tener que cargar la página, cuando hagamos la peticion HTTP de esa ruta, ControladorSlides.metodo pruebaSlides*/
api.get("/probando-controlador-slides", ControladorSlides.pruebaSlides);

/*crear las rutas para subir slide, utilizando el token de aut, y la ruta donde se van a subir las imagenes, ControladorSlides.metodo*/
api.post("/crear-slide", [md_aut.autentificacion, fichero], ControladorSlides.crearSlide);
api.get("/mostrarSlides", ControladorSlides.mostrarSlides);
//actualizar slide
api.put("/actualizarslide/:id", [md_aut.autentificacion, fichero], ControladorSlides.actualizarSlide);
//borrar slide
api.delete("/borrarslide/:id",  md_aut.autentificacion, ControladorSlides.borrarSlide);
//visualice la imagen en el navegador a traves de su url
api.get("/tomarimagenslide/:imagen", ControladorSlides.tomarImagenSlide);
//Exportamos el modulo api
module.exports = api;


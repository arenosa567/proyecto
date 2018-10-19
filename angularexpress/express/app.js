const express = require('express');
//dependencia nos ayuda a convertir objetos json los datos que nos llegan por las peticiones http
const bodyParser = require('body-parser');

//la variable app es el objeto express
/*va a ser el motor de la aplicacion del backend porque va a recibir las peticiones http, vamos p poder crear controladores. crear rutas, crear todas las cosas fundamentales dentro de un framework de desarrollo a nivel de backend.*/
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
//app.use(app.router); 
/*==========================================================
            cabeceras http https://enable-cors.org/server_expressjs.html
============================================================*/
app.use((req, res, next)=>{
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method");
 res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
 res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
 res.header("Content-type", "apllication/json");    
 next();
 
})
/*==========================================================
            cargar rutas
============================================================*/
var rutaUsuarios = require("./rutas/usuarios.ruta.js");
var rutaSlides = require("./rutas/slides.ruta.js");
var rutaGalerias = require("./rutas/galerias.ruta.js");

/*==========================================================
            cargar rutas base de nuestra aplicacion
============================================================*/

app.use("/api", rutaUsuarios);
app.use("/api", rutaSlides);
app.use("/api", rutaGalerias);


//exportar el modulo app

module.exports = app;

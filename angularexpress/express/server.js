
/*==========================================================
            LIBRERIA MONGODB
============================================================*/


//const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');

/*==========================================================
            MODULO EXPRESS
============================================================*/
const app = require("./app");

/*==========================================================
            CONEXION A LA BASE DE DATOS
============================================================*/
const url = process.argv[2]; //corresponde a usuario
const port = process.argv[3] ? process.argv[3]:1234;
mongoose.connect(url, (error, respuesta) => {
  
    if(error){
        throw error;
    }else{
        
        console.log("la conexion a la base de datos está correcta");
       app.listen(port, function(){
            
            console.log("Servidor del ApiRest en http://localhost:"+port);
       })
    }
 });

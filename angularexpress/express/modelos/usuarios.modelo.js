//acceder a la base de datos

const mongoose = require('mongoose');
/*crear objeto tipo schema, para traer una propiedad de ese tipo, nos permite guardar en una coleccion concretay en un documento concreto dentro de esa colección*/
var Schema = mongoose.Schema;

//creamos el esquema con los respectivos atributos
var UsuariosSchema = Schema({
    usuario: String,
    password: String
    
});

//exportar el objeot Usuarios, va poder ser instanciado y automáticamente le vamos asignando los valores del esquema
//module.exports = MongoClient.model("Usuarios", UsuariosSchema);
module.exports = mongoose.model("Usuarios", UsuariosSchema);
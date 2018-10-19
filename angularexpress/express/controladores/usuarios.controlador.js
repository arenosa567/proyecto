
//crear un metodo para ver si el controlados esta funcionando
function pruebaUsuarios(req, res){
    
    res.status(200).send({mensaje: "Probando el controlador de usuarios"})
}

//importar dependencias para encriptar password
var bcrypt = require("bcrypt-nodejs");
//importar el modelo de usuarios
var Usuarios = require("../modelos/usuarios.modelo.js");
//importamos el token
var token = require("../token/token.js");
//metodo para crear usuarios
function crearUsuarios(req, res){
  //1º importar el modelo de usuarios para traerme el objeto de ese modelo 
  //2º creamos una variable que traiga el objeto del modelo Usuarios    
    var usuarios = new Usuarios();
/*3º se necesita un formulario para crear el usuario utilizdo en postman(recogemos los parametro que llegan por la peticion POST*/
    var parametros = req.body;
    //console.log(parametros);
    //guardar los datos en la base de datos mongodb, y guardar password encriptado
    usuarios.usuario = parametros.usuario;
    
    //para encriptar password, antes de guardar la información en la base de datos
    /*dentro del mongoose utilizamos el metodo save(guardar)y anter de llenar el campo usuarios.password, encriptar parametros.password*/
      //si el campo parametros.password tiene contraseña
        if(parametros.password){
           //encriptamos la contraseña existente buscar google bcrypt-nodejs
            bcrypt.hash(parametros.password, null, null, function(error, hash){
                 //la contraseña ya esta encriptada 
                usuarios.password = hash;
                if(parametros.usuario != null){
                    //guardamos en la base de datos
                    usuarios.save((error, usuarioGuardado) =>{
                        if(error){
                            res.status(500).send({mensaje: "error al guardar el usuario"});
                        }else{
                            res.status(200).send({usuarioGuardado});
                        }
                    })
                }
                        
            })
        }
}

//Método para ingreso del usuarios aqui comparamos lo que se escribe en el formulario con la bd

function ingresoUsuario(req, res){
    //lo que se esta mandando en el formulario 
    var parametros = req.body;
    //lo que se escribe en el input del usuario
	var usuario = parametros.usuario;
    //lo que se escribe en el input del password
	var password = parametros.password;

	//hacer una lectura modelo Usuarios,  si existe ese usuario y password
        Usuarios.findOne({usuario:usuario}, (error, seleccionUsuario) =>{
               
            if(error){
                
                res.status(500).send({mensaje: "error al ingresar el usuario"});
            }else{
                
                if(!seleccionUsuario){
                    
                     res.status(404).send({mensaje: "el usuario no existe"});
                    
                }else{
                                       
                    /*comparar una contraseña nueva con la contraseña encriptada de la bd con bcrypt.compare(password viene del body, lo que voy a comparar es decir lo que viene en  seleccionUsuario.password(lo que viene de la bd) )*/
                    bcrypt.compare(password, seleccionUsuario.password, function(error, ok){
                        
                        if(ok){
                            //cuando el usuario ingrese al sistema vamos a crear el token
                            //res.status(200).send({seleccionUsuario});
                            //debemos enviar un parametro token en true y poner un atributo mas token
                            if(parametros.token){
                                //devolvemos un token JWT, ponemos otra propiedad nos devuelva los datos bd(id,usuario,password) es seleccionUsuario
                                res.status(200).send({token: token.crearToken(seleccionUsuario), seleccionUsuario});
                            }
                            
                            
                        }else{
                            
                            res.status(404).send({mensaje: "el usuario no ha podido ingresar"});
                        }
                    })
                    
                }
                
            }
                          
        })
    
}
  function actualizarUsuario(req, res){
      //capturar el id de la ruta
      var id = req.params.id;
      
      var actualizar = req.body;
      //si el id es diferente al token
      if(id != req.usuarioToken.sub){
          
          return res.status(500).send({mensaje: "No tienes permisos para actualizar este usuario"});
      }
          
          //recorremos la bd con el metodo findByIdAndUpdate
          Usuarios.findByIdAndUpdate(id, actualizar, (error, usuarioActualizado)=>{
              
              if(error){
                  
                  res.status(500).send({mensaje:"Error al actualizar el usuario"});
              }else{
                  
                  if(!usuarioActualizado){
                      
                      res.status(500).send({mensaje:"no se ha podido actualizar el usuario"});
                  }else{
                      
                      res.status(200).send({usuarioActualizado})
                  }
              }
              
          })
      
  } 

function borrarUsuario(req, res){
    //capturar el id de la ruta
      var id = req.params.id;
    if(id != req.usuarioToken.sub){
          
          return res.status(500).send({mensaje: "No tienes permisos para borrar este usuario"});
      }
    //recorremos la bd con el metodo findByIdAndRemove
     Usuarios.findByIdAndRemove(id, (error, usuarioBorrado)=>{
         
         if(error){
             
             res.status(500).send({mensaje:"Error al borrar el usuario"});
         }else{
             
             if(!usuarioBorrado){
                      
                      res.status(500).send({mensaje:"no se ha podido borrar el usuario"});
                  }else{
                      
                      res.status(200).send({usuarioBorrado})
                  }
             
         }
     })
}
//exportar los mtodos del modulo

module.exports = {
    
    pruebaUsuarios,
    crearUsuarios,
    ingresoUsuario,
    actualizarUsuario,
    borrarUsuario
}
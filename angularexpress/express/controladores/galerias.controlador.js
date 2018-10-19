//crear un metodo para ver si el controlados esta funcionando
function pruebaGalerias(req, res){
    
    res.status(200).send({mensaje: "Probando el controlador de Galerías"})
}
var Galerias =require("../modelos/galerias.modelo.js");
const fs = require("fs");
const path = require("path");
/*=====================================
    MÉTODO CREAR Foto
=======================================*/
function crearFoto(req, res){
    //crear una variable que traiga el objeto del modelo slides
    var galerias = new Galerias();
    //recoger los parametros que nos llegan de la peticion post a traves del modelo es decir sus campos o documentos
    var params = req.body;
   
    galerias.foto = params.foto; 
       
    
    if(req.files){
        //console.log("req.files", req.files);
        var fotoPath = req.files.foto.path;
        
       var fotoSplit = fotoPath.split("\\");
        
        
        galerias.foto=fotoSplit[2];
        
        if(galerias.foto != null){
            
            galerias.save((error, galeriaGuardada) =>{
                
                if(error){
                    
                   res.status(500).send({mensaje: "Error al guardar la foto"}); 
                }else{
                    
                    if(!galeriaGuardada){
                        
                        res.status(500).send({mensaje: "No se ha podido guardar la foto"});
                    }else{
                        //muestre cual es la galeria guardado
                        res.status(200).send({galeriaGuardada});
                    }
                }
            })
        }
    }
}

/*=====================================
    MÉTODO Mostrar Fotos
=======================================*/

function mostrarFotos(req, res){
    //lectura lo que existe en el modelo
    Galerias.find((error, mostrandoFotos)=>{
        
        if(error){
            
            res.status(500).send({mensaje: "Error en la petición"})
        }else{
           
            res.status(200).send({mostrandoFotos});
        }
      //ordenar a traves propiedad _id 
    }).sort("_id")
    
}

/*=====================================
    MÉTODO BORRAR Foto
=======================================*/

function borrarFoto(req, res){
    //capturar id lo que esta mandando en parametros en la url
    var id= req.params.id;
    //borrar el archivo de la imagen del sistema
    Galerias.findOne({_id: id}, (error, capturarFoto) =>{
        
        if(error){
            
            res.status(500).send({mensaje: "Error al capturar el Foto"})
        }else{
            
           if(!capturarFoto){
           
               
               res.status(404).send({mensaje: "No se ha podido captuar el Foto"})	
           } else{
               //se necesita borrar imagen del servidor
               var antiguaImagen = capturarFoto.foto;
               var rutaImagen = "./ficheros/galeria/"+antiguaImagen;
               fs.unlink(rutaImagen, function (err) {
                if (err) throw err;
                // if no error, file has been deleted successfully
                console.log('File deleted!');
            }); 
           }
        }
    })
    /*no se puede ejecutar al mismo tiempo las dos tareas, por esa razon se utiliza setTimeout */
    setTimeout(function(){
    //luego de borrar el archivo remover el item o id del slide
        Galerias.findByIdAndRemove(id, (error, borrarFoto) =>{

            if(error){

                res.status(500).send({mensaje: "Error al borrar la foto"})
            }else{

               if(!borrarFoto){

                   res.status(404).send({mensaje: "No se ha podido borrar la foto"})	
               } else{

                   res.status(200).send({borrarFoto});
               }
            }

        })
    }, 1000)    
}

/*==============================================================
    MÉTODO visualizar imagen a traves de su url en el navegador
================================================================*/

function tomarImagenGaleria(req, res){
    
   /*capturar lo que viene por parametro la url de la imagen*/
    var imagen = req.params.foto;
    /*tomar ruta completa; imagen es la nombre imagen con su extension. lo concateno con la ruta completa donde esta guardada la api*/
    var rutaImagen ='./ficheros/galeria/'+imagen;
    //dependencia fs si existe
    fs.exists(rutaImagen, function(exists){
        
        if(exists){
            res.sendFile(path.resolve(rutaImagen));
        }else{
           res.status(404).send({mensaje: "La imagen no existe"}) 
        }
    })
}
//exportar los mtodos del modulo

module.exports = {
    
    pruebaGalerias,
    crearFoto,
    mostrarFotos,
    borrarFoto,
    tomarImagenGaleria
}
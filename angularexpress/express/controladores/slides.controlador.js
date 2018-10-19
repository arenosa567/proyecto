//crear un metodo para ver si el controlados esta funcionando
function pruebaSlides(req, res){
    
    res.status(200).send({mensaje: "Probando el controlador slides"})
}

//importar el modelo del slide
var Slides =require("../modelos/slides.modelo.js");
//para poder borrar el archivo antiguo al actualizar una imagen
const fs = require("fs");
//dependencia ruta de la imagen
const path = require("path");
/*=====================================
    MÉTODO CREAR SLIDE
=======================================*/
function crearSlide(req, res){
    //crear una variable que traiga el objeto del modelo slides
    var slides = new Slides();
    //recoger los parametros que nos llegan de la peticion post a traves del modelo es decir sus campos o documentos
    var params = req.body;
   
    slides.titulo = params.titulo; 
    slides.descripcion = params.descripcion;
    
    //recoger la imagen en el postman utilizamos el form-data
    //si vienen requerimientos de tipo file
    if(req.files){
        //console.log("req.files", req.files);
        //capturar el path
        var imagenPath = req.files.imagen.path;
        //console.log("imagenPath",imagenPath);
        /*convertir un string en array para asi tomar solo el nombre de la imagen,split("\\") es la separacion porque viene el path con ficheros\\slide\\nombreimagen.jpg*/ 
        var imagenSplit = imagenPath.split("\\");
        //voy a guardar en la base de datos el indice2 nombreimagen 
        //llenar mi campo slide de imagenes
        slides.imagen=imagenSplit[2];
        
        if(slides.titulo != null && slides.descripcion !=null ){
            
            slides.save((error, slideGuardado) =>{
                
                if(error){
                    
                   res.status(500).send({mensaje: "Error al guardar el slide"}); 
                }else{
                    
                    if(!slideGuardado){
                        
                        res.status(500).send({mensaje: "No se ha podido guardar el slide"});
                    }else{
                        //muestre cual es el slide guardado
                        res.status(200).send({slideGuardado});
                    }
                }
            })
        }
    }
}

/*=====================================
    MÉTODO Mostrar SLIDE
=======================================*/

function mostrarSlides(req, res){
    //lectura lo que existe en el modelo
    Slides.find((error, mostrandoSlides)=>{
        
        if(error){
            
            res.status(500).send({mensaje: "Error en la petición"})
        }else{
           
            res.status(200).send({mostrandoSlides});
        }
      //ordenar a traves propiedad _id 
    }).sort("_id")
    
}

/*=====================================
    MÉTODO Actualizar SLIDE
=======================================*/

function actualizarSlide(req, res){
    
    //captuar el modelo Slides
    var slides = Slides();
    //captuar el id se esta mandando por la url
    var id = req.params.id;
    //capturar lo que se esta mandando en el body o formulario
    var parametros = req.body;
    //si viene con informacion puedo almacenar el tiulo del value del formulario
    slides.titulo = parametros.titulo;
	slides.descripcion = parametros.descripcion;

	var cambioImagen = false;
    /*si el usuario no cambia la imagen, si no hay cambio de imagne ponemos un paremetro oculto en el formulario, se llamara actualizarImagen*/
    if(parametros.actualizarImagen == "0"){
        /*se envia otro parametro para almacenar en el modelo la ruta de la imagen actual*/
        
        slides.imagen = parametros.rutaImagenActual;
		cambioImagen = true;
        
    }else{
        //queremos cambiar la imagen
        //si vienen requerimientos de tipo file
        if(req.files){
            //capturar el path
           var imagenRuta = req.files.imagen.path;

            /*convertir un string en array para asi tomar solo el nombre de la imagen,split("\\") es la separacion porque viene el path con ficheros\\slide\\nombreimagen.jpg*/ 
            var imagenSplit = imagenRuta.split("\\");
            //voy a guardar en la base de datos el indice2 nombreimagen 
            //llenar mi campo slide de imagenes
           slides.imagen = imagenSplit[2];
            //borrar la imagen antigua cuando se cambie la imagen
            var antiguaImagen = parametros.rutaImagenActual;
            //capturar la ruta
            var rutaImagen = "./ficheros/slide/"+antiguaImagen;
            /*para aplicar la accion unlink necesitamos utilizar una dependencia llamado fs que sirve para manipular ficheros*/
            fs.unlink(rutaImagen, function (err) {
                if (err) throw err;
                // if no error, file has been deleted successfully
                console.log('File deleted!');
            }); 
        }
            cambioImagen = true;  
    }
   
    if(cambioImagen){

		if(slides.titulo != null && slides.descripcion != null && slides.imagen != null){

			var actualizar = {
					"titulo": slides.titulo,
					"descripcion": slides.descripcion,
					"imagen": slides.imagen
			}

			Slides.findByIdAndUpdate(id, actualizar, (error, slideActualizado)=>{

				if(error){

					res.status(500).send({mensaje: "Error al actualizar el Slide"})
				
				}else{

					if(!slideActualizado){

						res.status(404).send({mensaje: "No se ha podido actualizar el Slide"})	

					}else{

						res.status(200).send({slideActualizado});

					}

				}

			})

		}

	}

}

/*=====================================
    MÉTODO BORRAR SLIDE
=======================================*/

function borrarSlide(req, res){
    //capturar id lo que esta mandando en parametros en la url
    var id= req.params.id;
    //borrar el archivo de la imagen del sistema
    Slides.findOne({_id: id}, (error, capturarSlide) =>{
        
        if(error){
            
            res.status(500).send({mensaje: "Error al capturar el Slide"})
        }else{
            
           if(!capturarSlide){
               
               res.status(404).send({mensaje: "No se ha podido captuar el Slide"})	
           } else{
               //se necesita borrar imagen del servidor
               //res.status(200).send({capturarSlide.imagen});
               var antiguaImagen = capturarSlide.imagen;
               var rutaImagen = "./ficheros/slide/"+antiguaImagen;
               fs.unlink(rutaImagen, function (err) {
                if (err) throw err;
                // if no error, file has been deleted successfully
                console.log('File deleted!');
            }); 
           }
        }
    })
    //no se puede ejecutar al mismo tiempo las dos tareas se debe utilizar setTimeout
    setTimeout(function(){
    //luego de borrar el archivo remover el item o id del slide
        Slides.findByIdAndRemove(id, (error, borrarSlide) =>{

            if(error){

                res.status(500).send({mensaje: "Error al borrar el Slide"})
            }else{

               if(!borrarSlide){

                   res.status(404).send({mensaje: "No se ha podido borrar el Slide"})	
               } else{

                   res.status(200).send({borrarSlide});
               }
            }

        })
    }, 1000)    
}

/*==============================================================
    MÉTODO visualizar imagen a traves de su url en el navegador
================================================================*/

function tomarImagenSlide(req, res){
    
   // capturar lo que viene por parametro la url de la imagen o paso por parametro de la ruta el nombre de la imagen
    var imagen = req.params.imagen;
    /*tomar ruta completa; imagen es la nombre imagen con su extension. lo concateno con la ruta completa donde esta guardada la api*/
    var rutaImagen ='./ficheros/slide/'+imagen;
    //dependencia fs si existe
    fs.exists(rutaImagen, function(exists){
        
        if(exists){
            //se utiliza la dependencia path(ruta imagen) con resolve trae la ruta de la imagen
            res.sendFile(path.resolve(rutaImagen));
        }else{
           res.status(404).send({mensaje: "La imagen no existe"}) 
        }
    })
}
//exportar los mtodos del modulo

module.exports = {
    
    pruebaSlides,
    crearSlide,
    mostrarSlides,
    actualizarSlide,
    borrarSlide,
    tomarImagenSlide
}
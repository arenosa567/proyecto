
import { Injectable } from '@angular/core';
/*si vamoa a hacer peticiones HTTP debemos importar lso siguientes módulos*/

import { HttpClientModule } from '@angular/common/http'; 
import { HttpClient, HttpHeaders  } from '@angular/common/http';

/*importamos tambien el objeto Observable que nos va a permitir utilizar rxjs que es la respuesta del mapeo y trabajar con ello*/
import { Observable, of } from 'rxjs';
import { Ruta } from './rutaglobal';
@Injectable()
 

export class SlideService {

  
    
    /*==============================================
        Peticiones HTTP para traer el archivo json
    ================================================*/
    public url:string;
    constructor(private _HttpClient: HttpClient) { 
       
        //this.url = "http://tutorialesatualcance.com/slide.json";
        //ahi colocaremos la clase ruta del archivo rutaglobal.ts con su url
       //this.url = Ruta.url+"mostrarSlides";
       this.url = Ruta.url;
    }
    /*==================================================================
            SELECCIONAR SLIDE
    ====================================================================*/
    cargarJsonSlide():Observable<any>{
            /*peticion por get a tes URL, devolviendo la respuesta que nos de el método, haciendo una llamada al objeto http que ya tenenemos cargado en la propiedad privada*/

            /*Como parametroa debemos pasar la URL y capturamos la respuesta que nos de esa peticion por GET con el metodo MAP()*/

            /*En callback con una funcion de flecha recogemos la respuesta que viene en el primer parametro y lo convertimos en formato json utilizando el metodo JSON*/
            
         //let headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
       // return this._HttpClient.get(this.url, {headers:headers});
    //return this._HttpClient.get(this.url);
        return this._HttpClient.get(this.url+"mostrarSlides");
        }
    /*==================================================================
            NUEVO SLIDE
    ====================================================================*/
    //esta funcion se ejecuta en api.components.ts en la funcion nuevoSlide
    subirImagenSlide(url, items, token, imagen){
        
        if(!imagen){
            //crear varias opciones de respuesta solo se crean con Promise
            return new Promise( function(resolver, rechazar){
                
                rechazar("no hay imagen para subir");
            })
        }else{
            
            return new Promise( function(resolver, rechazar){
                //enviar un formulario en formdata
                var formData:any = new FormData();
                //requerimiento ajax
                var xhr = new XMLHttpRequest();
                //enviar la imagen
                formData.append("imagen", imagen[0]);
                formData.append("titulo", items.titulo);
                formData.append("descripcion", items.descripcion);
                //cuando el estado haya actualizado y cambiado
                xhr.onreadystatechange = function(){
                    if(xhr.readyState ==4){
                        
                        if(xhr.status ==200){
                            //traiga la respuesta del ajax
                            //resolver(JSON.parse(xhr.response))
                            resolver(xhr.response);
                            
                        }else{
                            
                            rechazar(xhr.response);
                            
                        }
                    }
                }
                
                xhr.open("POST", url, true);
                xhr.setRequestHeader("Authorization", token);
                //enviamos la peticion
                xhr.send(formData);
                
            })
        }
        
    }
    /*=============================================
   ACTUALIZAR SLIDE
  =============================================*/ 

  actualizarItemSlide(url, items, token, imagen){
      //cuando no se quiere actualizar la imagen
    if(!imagen){

      return new Promise(function(resolver, rechazar){

         var formData:any = new FormData();
           var xhr = new XMLHttpRequest();

           formData.append("titulo", items.titulo);
           formData.append("descripcion", items.descripcion);
          //viene slides.controlador.js
           formData.append("actualizarImagen", 0);
           formData.append("rutaImagenActual", items.imagen);

           xhr.onreadystatechange = function(){

             if(xhr.readyState == 4){

               if(xhr.status == 200){

                 resolver(JSON.parse(xhr.response))

               }else{

                 rechazar(xhr.response)
               }
             }

           }

           xhr.open("PUT", url, true);
           xhr.setRequestHeader("Authorization", token);
           xhr.send(formData);


      })
    
    }else{

       return new Promise(function(resolver, rechazar){

           var formData:any = new FormData();
           var xhr = new XMLHttpRequest();

           formData.append("imagen", imagen[0]);
           formData.append("titulo", items.titulo);
           formData.append("descripcion", items.descripcion);
           //viene slides.controlador.js
           formData.append("actualizarImagen", 1);
           formData.append("rutaImagenActual", items.imagen);

           xhr.onreadystatechange = function(){

             if(xhr.readyState == 4){

               if(xhr.status == 200){

                 resolver(JSON.parse(xhr.response))

               }else{

                 rechazar(xhr.response)
               }
             }

           }

           xhr.open("PUT", url, true);
           xhr.setRequestHeader("Authorization", token);
           xhr.send(formData);

       })

    }

  }
    /*==============================================
        borrar slide funcion se ejcuta en slide.component.ts
    ================================================*/
    
    borrarItemSlide(id){
        let headers = new HttpHeaders({"Content-Type":"application/json", "Authorization":localStorage.getItem("id")});
        
        return this._HttpClient.delete(this.url+"borrarslide/"+id, {headers:headers});
        
    }
    
}

import { Injectable } from '@angular/core';
//import { HttpClientModule } from '@angular/common/http'; 
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Ruta } from './rutaglobal';

@Injectable()
//esta clase lo importo en api.component.ts
export class GaleriaService {

    public url:string;
    
    constructor(private _HttpClient: HttpClient) { 
        
        //this.url = "http://tutorialesatualcance.com/galeria.json";
        //ahi colocaremos la clase ruta del archivo rutaglobal.ts con su url
        //this.url = Ruta.url+"mostrarFotos";
        this.url = Ruta.url;
    }
    /*==================================================================
            SELECCIONAR GALERIA
    ====================================================================*/
    cargarJsonGaleria():Observable<any>{
        //let headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});            
        //return this._HttpClient.get(this.url, {headers:headers});
        //return this._HttpClient.get(this.url);
            return this._HttpClient.get(this.url+"mostrarFotos");
        }
    /*==================================================================
            NUEVO GALERIA
    ====================================================================*/
    //esta funcion se ejecuta en api.components.ts en la funcion nuevaFotoGaleria
    subirFotoGaleria(url, token, foto){
        
        if(!foto){
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
                formData.append("foto", foto[0]);
                
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
     
    /*==============================================
        borrar foto funcion se ejcuta en galeria.component.ts
    ================================================*/
    
    borrarItemFoto(id){
        let headers = new HttpHeaders({"Content-Type":"application/json", "Authorization":localStorage.getItem("id")});
        
        return this._HttpClient.delete(this.url+"borrarfoto/"+id, {headers:headers});
        
    }
    
}

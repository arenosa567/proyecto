import { Injectable } from '@angular/core';
//import { HttpClientModule } from '@angular/common/http'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Ruta } from './rutaglobal';
//import { map } from 'rxjs/operators';
@Injectable()
 
//lo importamos la clase en api.component.ts
export class UsuariosService {
 public url:string;
    //vamos a api-component.ts
  constructor(private _HttpClient: HttpClient) { 
  
    //this.url = "http://tutorialesatualcance.com/usuarios.json";
      //ahi colocaremos la clase ruta del archivo rutaglobal.ts con su url
      //this.url = "http://localhost:1234/api/login";
      this.url = Ruta.url+"login";
  }
    //observables envia los datos de forma asincrona
    //login():Observable<any>{
     //recive el token con valor true
    login(listaUsuarios, token): Observable<any>{
    
        listaUsuarios.token = token;
        //configurar el envio post de mi solicitud a mi api,en formato string
        let parametros = JSON.stringify(listaUsuarios);	
       let headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
        return this._HttpClient.post(this.url, parametros, {headers:headers});
        
        //return this._HttpClient.get(this.url, parametros);
        
        
        }
}

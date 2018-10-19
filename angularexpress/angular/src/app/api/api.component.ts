import { Component, OnInit } from '@angular/core';
import { ListaUsuarios } from '../modelo/usuarios/usuarios.module';
import { ItemSlides } from '../modelo/slides/slides.module';
import { ItemGalerias } from '../modelo/galerias/galerias.module';
import { UsuariosService } from '../usuarios-service.service';
import { SlideService } from '../slide-service.service';
import { GaleriaService } from '../galeria-service.service';
import { Ruta } from '../rutaglobal';
@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css'],
    //lo pasamos al constructor
  providers: [UsuariosService, SlideService, GaleriaService] 
})
export class ApiComponent implements OnInit {
    //public usuarioJson;
    /*para loguearse, si se ha identificado ponemos un valor propiedad identificado, que tome valor despues de que ingrese en el formulario de api-component.html no identificado usuarios y password, para que reciba informacion en esta api en public listaUsuarios:listaUsuarios que viend de los compos del modelo y poder comparar con una base de datos en json con usuario y contraseña existentes*/
    public identificado;
    //capturar o guardar lo almacenado en el localstorage
    public usuario;
    //traer las propiedades que estan listausuarios
     public listaUsuarios:ListaUsuarios;
    //traer las propiedades que estan ItemSlides 
    public itemSlides:ItemSlides;
    public itemGalerias:ItemGalerias;
    /*muestre un mensaje cuando el usuario ponga incorrecto la contraseña y el password, lo ponemos el mensaje en projectfinal en api.component.html*/
    public validarIngreso:boolean = false;
    public mensaje; //mensaje que saldra en api.component,html de angular
    public subirImagen:Array<File>;
    public url:string;
    
    //los uuasiosService proniene ausuarios-service.service.ts para conectar con el servicio
   constructor(private _UsuariosService:UsuariosService,
               private _slideService:SlideService,
               private _galeriaService:GaleriaService) { 
        /*se estan trayendo el modelo ListaUsuarios, esos datos se estan incorparando por la accion two data binding el parameto usuario y password(("","") en el objeto listaUsuario)   */
       this.listaUsuarios = new ListaUsuarios("","");
       //instanciamos la clase con sus propiedades vacias(imagen, titulo, descripcion)
       this.itemSlides = new ItemSlides("","",""); 
       //this.itemGalerias no lo necesitamos porque va a ser enviada a traves del servicio
       this.url = Ruta.url;
   }
    ngOnInit() {
      //tomar las valores del local storage
      this.identificado=localStorage.getItem("id");
      this.usuario=localStorage.getItem("usuario");
  }
    onSubmit(){
                    
            /*voy a pasar al servicio a traves del metodo login el parametro this.listaUsuarios, que va a ser un parametro donde voy a enviar el valor de lo escrito en el formulario,en el usuarios.service.service.ts pongo como parametro en login(listaUsuarios,true), el true es el token*/
            this._UsuariosService.login(this.listaUsuarios, "true").subscribe(
                resultado =>{
                    //console.log("resultado", resultado);
                    //almacenar token 
                    this.identificado = resultado.token;
                    /*almacenar usuario  para ello en usuarios.controlador.js funcion ingresousuario en el status200 pongo otra propiedad seleccionusuario*/
                     this.usuario = resultado.seleccionUsuario.usuario;  
                    //almacenar en el localstorage usuario y el token
                    localStorage.setItem("id", this.identificado);
                    localStorage.setItem("usuario", this.usuario);
                  },
                  error =>{ 
                        console.log("error", error);
                        this.validarIngreso = true;
                        //convertir el mensaje en formato json
                        
                      //var errorMensaje =error.mensaje;
                      var errorMensaje = <any>error;
                      //var errorMensajes = JSON.parse(errorMensaje);    
                     // var errorMensaje = JSON.stringify(error); 
                      //console.log(typeof errorMensaje);
                        //pongo .mensaje porque viene en la propiedad JSON
                       //this.mensaje = errorMensaje.mensaje;
                      this.mensaje = errorMensaje.mensaje;
                      //return this.mensaje;
                     //this.mensaje = mensaje;
                     //console.log(typeof errorMensaje);
                     
                     
                  }
            
            )
        
           
        }
    
    //subir archivo de imagen al servidor, cargo una propiedad public subirImagen
    cargarFichero(fileInput:any){
        this.subirImagen = <Array<File>>fileInput.target.files;
        //console.log("this.subirImagen", this.subirImagen);
        /*validar informacion solo suba imagenes tipo jpg y no supere el tamaño de 2 mg o 2097152 bytes tomando 1024 o png utilizando las propiedades de la consola*/
        if(this.subirImagen[0].size < 2097152 && 
           this.subirImagen[0].type == "image/jpeg" || 
           this.subirImagen[0].type == "image/png")
           {
            this.validarIngreso = false;
            return this.subirImagen; 
            
        }else{
           //mostramos un mensaje en el formulario 
            this.validarIngreso = true;
            this.mensaje ="La extension o el peso del archivo no es valido";
            this.subirImagen = null;
            return this.subirImagen;
        }
    }

   nuevoSlide(){
       /*se necesita 1º paramento la ruta del url,lo que venga en las propiedades de titulo y descripcion es decir lo que esta almacendao en itemslides(titulo, descripcion),el identificado pues trae el token,subirimagen*/
       this._slideService.subirImagenSlide(this.url+"crear-slide", this.itemSlides, this.identificado, this.subirImagen).then(
       
          (resultado)=>{
             window.location.reload();
              
          }, 
          (error)=>{
             this.validarIngreso = true;
              this.mensaje ="No se puede subir el slide";
          }    
       )
      
      //console.log("this.itemSlides", this.itemSlides);
  }
    
    nuevaFotoGaleria(){
       /*se necesita 1º paramento la ruta del url,lo que venga en las propiedades de titulo y descripcion es decir lo que esta almacendao en itemslides(titulo, descripcion),el identificado pues trae el token,subirimagen*/
       this._galeriaService.subirFotoGaleria(this.url+"crear-foto", this.identificado, this.subirImagen).then(
       
          (resultado)=>{
             window.location.reload();
              
          }, 
          (error)=>{
             this.validarIngreso = true;
              this.mensaje ="No se puede subir la foto";
          }  
       )
      
      //console.log("this.itemSlides", this.itemSlides);
  }
    
    
    cerrarSesion(){
        
        localStorage.removeItem("id");
        localStorage.removeItem("usuario");
        localStorage.clear();
        //pasamos las propiedades de indentificado y usuario a nulas
        this.identificado = null;
        this.usuario = null;
    }

}

import { Component, OnInit } from '@angular/core';
//importamos la clase del servicio Slide
import { SlideService } from '../slide-service.service';
//importamos el modelo para modificar sus propiedades
import { ItemSlides } from '../modelo/slides/slides.module';
import { Ruta } from '../rutaglobal';
@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css'],
  /*para cargar el servicio de nuestro componente, debemos añadir la propiedad providers, esto no permite mediante le injector de dependencas generar instancias de los objetos de los servicio*/    
 providers: [SlideService]      
})
export class SlideComponent implements OnInit {
    public slideJson; //pasarlo a la vista
    public identificado;
    public url:string;
    public itemSlides:ItemSlides;
    //hay que traerse el id para saber que slide se va a modificar
    public idSlide;
    public formEditarSlide:boolean = false;
    //propiedad si hacemos click cambiarImagen aparezca seleccionar archivo
    public cambiarImagen:boolean = false;
    public validarIngreso:boolean = false;
    public subirImagen:Array<File>;
    public mensaje; //mensaje que saldra en api.component,html de angular
    /*nos traemos todas las acciones que se estan ejecutando en el servicio slide, creando una propiedad privada que va a traer todo lo que se esta ejecutando en el servicio del slide es decir la funcion prueba del archivo slide-service.service.ts*/
  constructor(private _SlideService:SlideService) {
      
      /*===============================================
        PETICIONES HTTP PARA TRAER EL ARCHIVO JSON
      =================================================*/
              
      this._SlideService.cargarJsonSlide().subscribe(
          
          resultado =>{
              //mostrandoSlides lo tomo desde la consola
             this.slideJson = resultado.mostrandoSlides;
             
              //utilizamos esta propiedad this.url en la vista slide.component.html
             //this.url = Ruta.url+"tomarimagenslide";
              //la ruta tomarimagenslide lo ponemos en slide.component.html
            this.url = Ruta.url;
              
          },
          error =>{
              
              var mensajeError = <any>error;
                
      });
  }
  
  
    ngOnInit() {
        //para elimina icono editar y borrar en el frontend
        this.identificado = localStorage.getItem("id");
        setTimeout(()=>{
        //aqui pegamos el slide.min.js
            var p = {
                paginacion: document.querySelectorAll("#paginacion li"),
                item: 0,
                cajaSlide: document.querySelectorAll("#slide ul"),
                animacionSilde: "slide",
                imgSlide: document.querySelectorAll("#slide ul li"),
                avanzar: document.querySelector("#slide #avanzar"),
                retroceder: document.querySelector("#slide #retroceder"),
                velocidadSlide: 3000,
                formatearLoop: false
            }
            var m = {
                inicioSlide: function() {
                    for (var i = 0; i < p.paginacion.length; i++) {
                        p.paginacion[i].addEventListener("click",
                        m.paginacionSlide);
                        p.imgSlide[""+i].style.width = (100 / p.paginacion.length) + "%";
                    }
                    p.avanzar.addEventListener("click", m.avanzar);
                    p.retroceder.addEventListener("click", m.retroceder);
                    m.intervalo();
                    p.cajaSlide["0"].style.width = (p.paginacion.length * 100) + "%";
                },
                paginacionSlide: function(item) {
                    //cambiar getAttribute("item") por getAttribute("value") 
                    p.item = item.target.parentNode.getAttribute("value") - 1;
                    m.movimientoSlide(p.item);
                },
                avanzar: function() {
                    if (p.item == p.imgSlide.length - 1) {
                        p.item = 0;
                    } else {
                        p.item++;
                    }
                    m.movimientoSlide(p.item);
                },
                retroceder: function() {
                    if (p.item == 0) {
                        p.item = p.imgSlide.length - 1;
                    } else {
                        p.item--;
                    }
                    m.movimientoSlide(p.item);
                },
                movimientoSlide: function(item) {
                    p.formatearLoop = true;
                    p.cajaSlide["0"].style.left = item * -100 + "%";
                    for (var i = 0; i < p.paginacion.length; i++) {
                        p.paginacion[""+i].style.opacity = .5;
                    }
                    p.paginacion[""+item].style.opacity = 1;
                    if (p.animacionSilde == "slide") {
                        p.cajaSlide["0"].style.transition = ".7s left ease-in-out";
                    }
                    if (p.animacionSilde == "fade") {
                        p.imgSlide[""+item].style.opacity = 0;
                        p.imgSlide[""+item].style.transition = ".7s opacity ease-in-out";
                        setTimeout(function() {
                            p.imgSlide[""+item].style.opacity = 1;
                        }, 500)
                    }
                },
                intervalo: function() {
                    setInterval(function() {
                        if (p.formatearLoop) {
                            p.formatearLoop = false;
                        } else {
                            m.avanzar();
                        }
                    }, p.velocidadSlide)
                }
            }
            m.inicioSlide();
        },1000);    
  }
    /*=============================================
            EDITAR SLIDE
    ===============================================*/
    editarSlide(slide){
        //capturar id
        this.idSlide = slide._id;
        //utilizar el modelo, asignar valor los campos
        this.itemSlides = new ItemSlides(slide.imagen, slide.titulo, slide.descripcion);
        //captuar la ruta al darnos coflicto lo quitamos
       //this.url = Ruta.url;
       
        this.formEditarSlide= true;
    }
    
    //subir archivo de imagen al servidor y validar la informacon subida, cargo una propiedad public subirImagen
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
    
    actualizarSlide(){
        this.url = Ruta.url+"actualizarslide/"+this.idSlide;
        //la funcion actualizarItemSlide va slide.service
        this._SlideService.actualizarItemSlide(this.url, this.itemSlides, this.identificado, this.subirImagen).then(
            
            (resultado)=>{
                //console.log("resultado", resultado);
                window.location.reload();
            },
            (error)=>{
                this.validarIngreso = true;
               //console.log("error", error); 
                this.mensaje ="No se puede actualizar el slide";
            }    
        );
        
        
    }
     /*=============================================
     BORRAR SLIDE FUNCION SE EJECUTA EN SLIDE.HTML
    ===============================================*/
    borrarSlide(slide){
        //capturar el slide
        let id = slide._id;
        // esa funcion borrarItemSlide lo creamos en slide.service
        this._SlideService.borrarItemSlide(id).subscribe(
        
            resultado=>{
                
               window.location.reload(); 
            },
            
            error=>{
                
                console.log("error", error);
            }
        
        
        )
    }
}

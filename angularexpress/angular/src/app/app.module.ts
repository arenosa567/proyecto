//angular.io/api/core/NgModule

/*las aplicaciones de angular son modulares y angular tiene su propio sistema de modularidad llamado NgModules. Cada aplicación angular tiene al menos una clase NgModules, el modulo raiz, nombrado convencionalmente AppModule*/
//importamos la clase BrowserModule, paa buscar modulos de angular.
import { BrowserModule } from '@angular/platform-browser';
//importamos o traemos la clase NgModule que es el módulo raiz
import { NgModule } from '@angular/core';
//Agregar HTTPmODULE para trabajar con cabeceras HTTP
import { HttpClientModule }    from '@angular/common/http';
//agregar para trabajar con formularios
import { FormsModule } from '@angular/forms';
//importamos o traemos el componente que es donde estará la vista principal de la aplicación
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { SlideComponent } from './slide/slide.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { MouseComponent } from './mouse/mouse.component';
import { ScrollComponent } from './scroll/scroll.component';
//import { FormularioComponent } from './formulario/formulario.component'ent'ent'ent'ent'ent'ent';
import { FormularioComponent } from './formulario/formulario.component';
import { ApiComponent } from './api/api.component';
import { AppRoutingModule } from './app-routing.module';

//import { ListaUsuarios } from 'modelo/usuarios/usuarios.module';
//importamos los modulos de ruta
//import { routing, appRoutingProviders } from './app.rutas';
/*@NgModule.- decoradores son funciones que modifican clases de javascript. angular tiene muchos decoradores que adjuntan metadatos de las calses para que sepa lo que significan esas clases y como deben funcionar*/
@NgModule({
    /*las declaraciones son las clases de vista que pertenecen a este modulo. Angular tiene tres tipos declases de vista: Components, directives, and pipes(herramientas que podemos trabajar con angular)*/
  declarations: [
    AppComponent,
    IndexComponent,
    SlideComponent,
    GaleriaComponent,
    MouseComponent,
    ScrollComponent,
    FormularioComponent,
    ApiComponent
   
  ],
  /*importamos otros modulos cuyas clases exportadas sean necesarias para las plantillas de componentes declaradas en este módulo*/    
  imports: [
    BrowserModule,
      //cargo el modulo HttpClient,
     HttpClientModule,
     
    AppRoutingModule,
      //cargp el modulo formularios
    FormsModule
    
  ],
  /*Los proveedores son los creadores de servicios que este módulo contribuye a la recolección global de servicios; se vuelven accesibles en todas las partes de la aplicación. esto lo habilitamos cuando invocamos servicios desde una base de datos.*/    
  providers: [
      //appRoutingProviders
      //SlideService
  ],
  bootstrap: [AppComponent]
})
//exportamos la clase del modulo raiz para poder ser invocada en otros archivos
export class AppModule { }

//importamos la clase Component para recopilar metadatos de configuracion de componentes
import { Component } from '@angular/core';
/*treamos su decorador de la clase componente*/
@Component({
    /*etiqueta personalizado que nos permite crear angular con el HTML Y DONDE SE VA A VISUALIZAR ESTE COMPONENTE, se pone en index.html*/
  selector: 'app-root',
  /*la plantilla url es la ruta de la vista HTML que va a imprimir este componente*/    
  templateUrl: './app.component.html',
  /*la ruta del estilo es donde direccionamos la hoja de estilo exclusiva de este componente*/    
  styleUrls: ['./app.component.css']
})
/*exportamos la clase con el nombre a que nosotros declaramos en el APP MODULE*/
export class AppComponent {
  title = 'angular';
}

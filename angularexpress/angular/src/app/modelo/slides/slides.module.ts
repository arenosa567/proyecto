//poder realizar two data binding en el formulario de slide en api.component.html
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
//importar componente en api.component.ts
export class ItemSlides{ 

    constructor(
    
        public imagen: string,
        public titulo:string,
        public descripcion:string 
    
    ){}

}

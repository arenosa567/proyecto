import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
//importar en el componente de la api-component.ts 
export class ListaUsuarios {
    constructor(
        public usuario: string,
        public password:string 
    ){}

}

import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
/*el router angular es un servicio opcional que presenta una vista de componente particular para una determianad URL. No es parte del núcleo angular. Es en su propio paquete de biblioteca, @angular/router, lo que necesita de ella*/
import { RouterModule, Routes } from '@angular/router';
/*importar los componentes entre los cuales voy a navegar es el componente index y el componente api(boton angular)*/
import { IndexComponent } from './index/index.component';
import { ApiComponent } from './api/api.component';
const appRoutes: Routes = [
    
    {path: "", component: IndexComponent},
    {path: "index", component: IndexComponent},
    {path: "api", component: ApiComponent},
    {path: "**", component: ApiComponent}
      
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
//exportar appRoutingProviders que va a ser un array con objeto de cualquier tipo
export class AppRoutingModule {};


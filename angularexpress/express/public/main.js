(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api/api.component.css":
/*!***************************************!*\
  !*** ./src/app/api/api.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/api/api.component.html":
/*!****************************************!*\
  !*** ./src/app/api/api.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--como separar esas dos secciones, crear una propiedad componente api se llame identificación-->\r\n<!--===============================================\r\n        Login\r\n===================================================-->\r\n<!--si todavia no se ha logueado-->\r\n<section *ngIf=!identificado id=\"login\">\r\n    <!--para utilizar two way data binding onSubmit lo creamos en api.components.ts -->\r\n    <form #formIngreso =\"ngForm\" (ngSubmit) =\"onSubmit()\">\r\n        <h1>Login</h1>\r\n        \r\n        <hr>\r\n        <!--obligar que rellene el campo despues de salir del campo si no se escribio nada usuario.touched(usuario ha sido tocado) !usuario.valid(no ha sido lleno) con [ngStyle] se crean estilos propios de angular-->\r\n        <span *ngIf =\"usuario.touched && !usuario.valid\"\r\n              [ngStyle] =\"{'color':'red','font-size':'14px','margin':'20px'}\"> *Favor llenar este campo</span>  \r\n                                                                    \r\n                                                                    \r\n        <!--Directiva Two way data Bindind: lo que se defina en la vista, se define en el componente, lo que se define en el componente se define en la vista, al mismo tiempo y en tiempo real, con ngModel (vamos a enviar la informacion al modelo) y ese modelo representado [(ngModel)] lo va a recibir la propiedad listaUsuarios.usuarios o password-->\r\n        <input type=\"text\" placeholder=\"Usuario\" name =\"usuario\" #usuario=\"ngModel\" [(ngModel)] = listaUsuarios.usuario required>\r\n        <span *ngIf =\"password.touched && !password.valid\"\r\n              [ngStyle] =\"{'color':'red', 'font-size':'14px','margin':'20px'}\"> *Favor llenar este campo</span>\r\n                                                            \r\n        <input type=\"password\" placeholder=\"Contraseña\" name =\"password\" #password=\"ngModel\" [(ngModel)] = listaUsuarios.password required>\r\n        <input type=\"submit\" value=\"enviar\">\r\n        <!--mensaje cuando se ingresa usuario y contraseña invalida-->\r\n        <div *ngIf=\"validarIngreso\" style=\"text-align: center\">\r\n            <!--mensaje que traiga desde api rest a traves api.component.ts-->\r\n            <div style=\"color:red; margin-bottom: 10px \">{{mensaje}}</div>\r\n            \r\n        \r\n        </div>\r\n    \r\n    </form>\r\n    <!--pongo la ruta especificado en app-routing-module.ts-->\r\n    <a [routerLink]=\"['/']\"><button class=\"btn-frontend\">regresar menú principal</button></a>\r\n</section>    \r\n\r\n<!--===============================================\r\n cuando el usuario se loguee entre en el backend\r\n===================================================--> \r\n <!--si ha identificado-->   \r\n<section *ngIf=identificado id=\"backend\">\r\n    <a [routerLink]=\"['/']\"><button class=\"btn-frontend\">regresar menú principal</button></a>\r\n    \r\n    <div id=\"cabezote\">\r\n        \r\n        <h3>Hola {{usuario}}</h3>\r\n\r\n        <button (click)=\"cerrarSesion()\">Cerrar Sesión</button> \r\n    </div>\r\n    \r\n    <hr>\r\n    <!--traernos lo que tenemos que gestionar trernos las etiquetas del slide y galerias de index-component.html -->\r\n    \r\n    <!--=====================================\r\n\tSLIDESHOW  \r\n\t======================================-->\r\n    <!--agregar nueva foto-->\r\n    <div class=\"gestores\">\r\n        \r\n          <h1>Gestor o Crear Slide tamaño 1024x349 pixels</h1>\r\n        <!--realizamos el two data binding para traernos las propiedades con ngForm y ngModel, -->\r\n        <form #formSlides =\"ngForm\" (ngSubmit) =\"nuevoSlide()\">\r\n        <!--y lo relacionamos con [(ngModel)]=\"itemSlides.titulo\" que viene del modelo-->\r\n            <input type=\"text\" placeholder=\"Título.....\" name=\"titulo\" #titulo=\"ngModel\" [(ngModel)]=\"itemSlides.titulo\" required>\r\n            \r\n            <textarea maxlength=\"55\" placeholder=\"Descripcion.....\" name=\"descripcion\" #titulo=\"ngModel\" [(ngModel)]=\"itemSlides.descripcion\" required></textarea>\r\n            \r\n            <!--enviar un archivo desde angular al apirest utilizo atributo(change)=\"metodo de angular\" lo creo esa funcion o motodo de angular en api.component.ts-->\r\n            <input type=\"file\" (change)=\"cargarFichero($event)\" required>\r\n            <input type=\"submit\" value=\"Enviar\">\r\n            <div *ngIf =\"validarIngreso\" style=\"text-align: center\" >\r\n               <div style=\"color:red; margin-bottom: 10px \"> {{mensaje}} </div>\r\n            </div>\r\n        </form>\r\n    \r\n    </div>\r\n        <app-slide></app-slide>\r\n\t\r\n\t<!--=====================================\r\n\tGALERIA \r\n\t======================================-->\r\n\t    <!--agregar nueva foto-->\r\n    <div class=\"gestores\">\r\n        \r\n          <h1>Gestor Galería tamaño 226x154 pixels</h1>  \r\n        <form #formGalerias =\"ngForm\" (ngSubmit) =\"nuevaFotoGaleria()\">\r\n                    \r\n            <input type=\"file\" (change)=\"cargarFichero($event)\" required>\r\n            <input type=\"submit\" value=\"Enviar\">\r\n        \r\n        </form>\r\n    \r\n    </div>\r\n\t    <app-galeria></app-galeria>\r\n\t\r\n</section>    "

/***/ }),

/***/ "./src/app/api/api.component.ts":
/*!**************************************!*\
  !*** ./src/app/api/api.component.ts ***!
  \**************************************/
/*! exports provided: ApiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiComponent", function() { return ApiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modelo_usuarios_usuarios_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modelo/usuarios/usuarios.module */ "./src/app/modelo/usuarios/usuarios.module.ts");
/* harmony import */ var _modelo_slides_slides_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modelo/slides/slides.module */ "./src/app/modelo/slides/slides.module.ts");
/* harmony import */ var _usuarios_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../usuarios-service.service */ "./src/app/usuarios-service.service.ts");
/* harmony import */ var _slide_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../slide-service.service */ "./src/app/slide-service.service.ts");
/* harmony import */ var _galeria_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../galeria-service.service */ "./src/app/galeria-service.service.ts");
/* harmony import */ var _rutaglobal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../rutaglobal */ "./src/app/rutaglobal.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ApiComponent = /** @class */ (function () {
    //los uuasiosService proniene ausuarios-service.service.ts para conectar con el servicio
    function ApiComponent(_UsuariosService, _slideService, _galeriaService) {
        this._UsuariosService = _UsuariosService;
        this._slideService = _slideService;
        this._galeriaService = _galeriaService;
        /*muestre un mensaje cuando el usuario ponga incorrecto la contraseña y el password, lo ponemos el mensaje en projectfinal en api.component.html*/
        this.validarIngreso = false;
        /*se estan trayendo el modelo ListaUsuarios, esos datos se estan incorparando por la accion two data binding el parameto usuario y password(("","") en el objeto listaUsuario)   */
        this.listaUsuarios = new _modelo_usuarios_usuarios_module__WEBPACK_IMPORTED_MODULE_1__["ListaUsuarios"]("", "");
        //instanciamos la clase con sus propiedades vacias(imagen, titulo, descripcion)
        this.itemSlides = new _modelo_slides_slides_module__WEBPACK_IMPORTED_MODULE_2__["ItemSlides"]("", "", "");
        //this.itemGalerias no lo necesitamos porque va a ser enviada a traves del servicio
        this.url = _rutaglobal__WEBPACK_IMPORTED_MODULE_6__["Ruta"].url;
    }
    ApiComponent.prototype.ngOnInit = function () {
        //tomar las valores del local storage
        this.identificado = localStorage.getItem("id");
        this.usuario = localStorage.getItem("usuario");
    };
    ApiComponent.prototype.onSubmit = function () {
        var _this = this;
        /*voy a pasar al servicio a traves del metodo login el parametro this.listaUsuarios, que va a ser un parametro donde voy a enviar el valor de lo escrito en el formulario,en el usuarios.service.service.ts pongo como parametro en login(listaUsuarios,true), el true es el token*/
        this._UsuariosService.login(this.listaUsuarios, "true").subscribe(function (resultado) {
            //console.log("resultado", resultado);
            //almacenar token 
            _this.identificado = resultado.token;
            /*almacenar usuario  para ello en usuarios.controlador.js funcion ingresousuario en el status200 pongo otra propiedad seleccionusuario*/
            _this.usuario = resultado.seleccionUsuario.usuario;
            //almacenar en el localstorage usuario y el token
            localStorage.setItem("id", _this.identificado);
            localStorage.setItem("usuario", _this.usuario);
        }, function (error) {
            console.log("error", error);
            _this.validarIngreso = true;
            //convertir el mensaje en formato json
            //var errorMensaje =error.mensaje;
            var errorMensaje = error;
            //var errorMensajes = JSON.parse(errorMensaje);    
            // var errorMensaje = JSON.stringify(error); 
            //console.log(typeof errorMensaje);
            //pongo .mensaje porque viene en la propiedad JSON
            //this.mensaje = errorMensaje.mensaje;
            _this.mensaje = errorMensaje.mensaje;
            //return this.mensaje;
            //this.mensaje = mensaje;
            //console.log(typeof errorMensaje);
        });
    };
    //subir archivo de imagen al servidor, cargo una propiedad public subirImagen
    ApiComponent.prototype.cargarFichero = function (fileInput) {
        this.subirImagen = fileInput.target.files;
        //console.log("this.subirImagen", this.subirImagen);
        /*validar informacion solo suba imagenes tipo jpg y no supere el tamaño de 2 mg o 2097152 bytes tomando 1024 o png utilizando las propiedades de la consola*/
        if (this.subirImagen[0].size < 2097152 &&
            this.subirImagen[0].type == "image/jpeg" ||
            this.subirImagen[0].type == "image/png") {
            this.validarIngreso = false;
            return this.subirImagen;
        }
        else {
            //mostramos un mensaje en el formulario 
            this.validarIngreso = true;
            this.mensaje = "La extension o el peso del archivo no es valido";
            this.subirImagen = null;
            return this.subirImagen;
        }
    };
    ApiComponent.prototype.nuevoSlide = function () {
        var _this = this;
        /*se necesita 1º paramento la ruta del url,lo que venga en las propiedades de titulo y descripcion es decir lo que esta almacendao en itemslides(titulo, descripcion),el identificado pues trae el token,subirimagen*/
        this._slideService.subirImagenSlide(this.url + "crear-slide", this.itemSlides, this.identificado, this.subirImagen).then(function (resultado) {
            window.location.reload();
        }, function (error) {
            _this.validarIngreso = true;
            _this.mensaje = "No se puede subir el slide";
        });
        //console.log("this.itemSlides", this.itemSlides);
    };
    ApiComponent.prototype.nuevaFotoGaleria = function () {
        var _this = this;
        /*se necesita 1º paramento la ruta del url,lo que venga en las propiedades de titulo y descripcion es decir lo que esta almacendao en itemslides(titulo, descripcion),el identificado pues trae el token,subirimagen*/
        this._galeriaService.subirFotoGaleria(this.url + "crear-foto", this.identificado, this.subirImagen).then(function (resultado) {
            window.location.reload();
        }, function (error) {
            _this.validarIngreso = true;
            _this.mensaje = "No se puede subir la foto";
        });
        //console.log("this.itemSlides", this.itemSlides);
    };
    ApiComponent.prototype.cerrarSesion = function () {
        localStorage.removeItem("id");
        localStorage.removeItem("usuario");
        localStorage.clear();
        //pasamos las propiedades de indentificado y usuario a nulas
        this.identificado = null;
        this.usuario = null;
    };
    ApiComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-api',
            template: __webpack_require__(/*! ./api.component.html */ "./src/app/api/api.component.html"),
            styles: [__webpack_require__(/*! ./api.component.css */ "./src/app/api/api.component.css")],
            //lo pasamos al constructor
            providers: [_usuarios_service_service__WEBPACK_IMPORTED_MODULE_3__["UsuariosService"], _slide_service_service__WEBPACK_IMPORTED_MODULE_4__["SlideService"], _galeria_service_service__WEBPACK_IMPORTED_MODULE_5__["GaleriaService"]]
        }),
        __metadata("design:paramtypes", [_usuarios_service_service__WEBPACK_IMPORTED_MODULE_3__["UsuariosService"],
            _slide_service_service__WEBPACK_IMPORTED_MODULE_4__["SlideService"],
            _galeria_service_service__WEBPACK_IMPORTED_MODULE_5__["GaleriaService"]])
    ], ApiComponent);
    return ApiComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _api_api_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/api.component */ "./src/app/api/api.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//import { CommonModule } from '@angular/common';
/*el router angular es un servicio opcional que presenta una vista de componente particular para una determianad URL. No es parte del núcleo angular. Es en su propio paquete de biblioteca, @angular/router, lo que necesita de ella*/

/*importar los componentes entre los cuales voy a navegar es el componente index y el componente api(boton angular)*/


var appRoutes = [
    { path: "", component: _index_index_component__WEBPACK_IMPORTED_MODULE_2__["IndexComponent"] },
    { path: "index", component: _index_index_component__WEBPACK_IMPORTED_MODULE_2__["IndexComponent"] },
    { path: "api", component: _api_api_component__WEBPACK_IMPORTED_MODULE_3__["ApiComponent"] },
    { path: "**", component: _api_api_component__WEBPACK_IMPORTED_MODULE_3__["ApiComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    //exportar appRoutingProviders que va a ser un array con objeto de cualquier tipo
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
        //exportar appRoutingProviders que va a ser un array con objeto de cualquier tipo
    ], AppRoutingModule);
    return AppRoutingModule;
}());

;


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<app-index></app-index>-->\r\n<!--la etiqueta <router-oulet> me va a permitir navegar entre vistas-->\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//importamos la clase Component para recopilar metadatos de configuracion de componentes

/*treamos su decorador de la clase componente*/
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            /*etiqueta personalizado que nos permite crear angular con el HTML Y DONDE SE VA A VISUALIZAR ESTE COMPONENTE, se pone en index.html*/
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
        /*exportamos la clase con el nombre a que nosotros declaramos en el APP MODULE*/
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _slide_slide_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slide/slide.component */ "./src/app/slide/slide.component.ts");
/* harmony import */ var _galeria_galeria_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./galeria/galeria.component */ "./src/app/galeria/galeria.component.ts");
/* harmony import */ var _mouse_mouse_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mouse/mouse.component */ "./src/app/mouse/mouse.component.ts");
/* harmony import */ var _scroll_scroll_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scroll/scroll.component */ "./src/app/scroll/scroll.component.ts");
/* harmony import */ var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./formulario/formulario.component */ "./src/app/formulario/formulario.component.ts");
/* harmony import */ var _api_api_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./api/api.component */ "./src/app/api/api.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
//angular.io/api/core/NgModule
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*las aplicaciones de angular son modulares y angular tiene su propio sistema de modularidad llamado NgModules. Cada aplicación angular tiene al menos una clase NgModules, el modulo raiz, nombrado convencionalmente AppModule*/
//importamos la clase BrowserModule, paa buscar modulos de angular.

//importamos o traemos la clase NgModule que es el módulo raiz

//Agregar HTTPmODULE para trabajar con cabeceras HTTP

//agregar para trabajar con formularios

//importamos o traemos el componente que es donde estará la vista principal de la aplicación






//import { FormularioComponent } from './formulario/formulario.component'ent'ent'ent'ent'ent'ent';



//import { ListaUsuarios } from 'modelo/usuarios/usuarios.module';
//importamos los modulos de ruta
//import { routing, appRoutingProviders } from './app.rutas';
/*@NgModule.- decoradores son funciones que modifican clases de javascript. angular tiene muchos decoradores que adjuntan metadatos de las calses para que sepa lo que significan esas clases y como deben funcionar*/
var AppModule = /** @class */ (function () {
    //exportamos la clase del modulo raiz para poder ser invocada en otros archivos
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            /*las declaraciones son las clases de vista que pertenecen a este modulo. Angular tiene tres tipos declases de vista: Components, directives, and pipes(herramientas que podemos trabajar con angular)*/
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _index_index_component__WEBPACK_IMPORTED_MODULE_5__["IndexComponent"],
                _slide_slide_component__WEBPACK_IMPORTED_MODULE_6__["SlideComponent"],
                _galeria_galeria_component__WEBPACK_IMPORTED_MODULE_7__["GaleriaComponent"],
                _mouse_mouse_component__WEBPACK_IMPORTED_MODULE_8__["MouseComponent"],
                _scroll_scroll_component__WEBPACK_IMPORTED_MODULE_9__["ScrollComponent"],
                _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_10__["FormularioComponent"],
                _api_api_component__WEBPACK_IMPORTED_MODULE_11__["ApiComponent"]
            ],
            /*importamos otros modulos cuyas clases exportadas sean necesarias para las plantillas de componentes declaradas en este módulo*/
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                //cargo el modulo HttpClient,
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
                //cargp el modulo formularios
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            /*Los proveedores son los creadores de servicios que este módulo contribuye a la recolección global de servicios; se vuelven accesibles en todas las partes de la aplicación. esto lo habilitamos cuando invocamos servicios desde una base de datos.*/
            providers: [
            //appRoutingProviders
            //SlideService
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
        //exportamos la clase del modulo raiz para poder ser invocada en otros archivos
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/formulario/formulario.component.css":
/*!*****************************************************!*\
  !*** ./src/app/formulario/formulario.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/formulario/formulario.component.html":
/*!******************************************************!*\
  !*** ./src/app/formulario/formulario.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 id=\"inicioFormulario\" class=\"row titulos\">\r\n\t\t\r\n\t\t<hr>\r\n\r\n\t\tVALIDACIÓN FORMULARIO\r\n\r\n\t\t<hr>\r\n\r\n\t</h1>\r\n\r\n\t<div id=\"formulario\" class=\"row\">\r\n\t\t\r\n\t\t<form method=\"post\" action=\"formulario.php\" onsubmit=\"return mf.validarFormulario()\">\r\n\t\t\t\r\n\t\t\t<h1>Ingrese sus datos</h1>\r\n\r\n\t\t\t<label for=\"nombre\">Ingrese su usuario: <span class=\"obligatorio\">*Campo Obligatorio</span></label>\r\n\t\t\t<input id=\"nombre\" class=\"validar\" type=\"text\" placeholder=\"Escriba su usuario con mínimo 2 caracteres, máximo 6 caracteres\" required>\r\n\r\n\t\t\t<label for=\"password\">Ingrese su contraseña: <span class=\"obligatorio\">*Campo Obligatorio</span></label>\r\n\t\t\t<input id=\"password\" class=\"validar\" type=\"password\" placeholder=\"Escriba su contraseña con mínimo 8 caracteres y debe incluir letras en mayúscula, en minúscula y números\" maxlength=\"15\" required>\r\n\r\n\t\t\t<label for=\"email\">Ingrese su correo electrónico: <span class=\"obligatorio\">*Campo Obligatorio</span></label>\r\n\t\t\t<input id=\"email\" class=\"validar\" type=\"email\" placeholder=\"Escriba su correo correctamente\" required>\r\n\r\n\t\t\t<label for=\"color\">Elija su color</label>\r\n\t\t\t<select id=\"color\">\r\n\t\t\t\t<option>Seleccione</option>\r\n\t\t\t\t<option>Amarillo</option>\r\n\t\t\t\t<option>Rojo</option>\r\n\t\t\t\t<option>Azul</option>\r\n\t\t\t</select>\r\n\r\n\t\t\t<br>\r\n\r\n\t\t\t<hr>\r\n\r\n\t\t\t<p>Seleccione Animal:</p>\r\n\t\t\t<input type=\"checkbox\" id=\"perro\">\r\n\t\t\t<label for=\"perro\" class=\"box\"><span></span>Perro</label>\r\n\t\t\t<input type=\"checkbox\" id=\"gato\">\r\n\t\t\t<label for=\"gato\" class=\"box\"><span></span>Gato</label>\r\n\t\t\t<input type=\"checkbox\" id=\"conejo\">\r\n\t\t\t<label for=\"conejo\" class=\"box\"><span></span>Conejo</label>\r\n\r\n\t\t\t<hr>\r\n\r\n\t\t\t<p>Seleccione forma de pago:</p>\r\n\t\t\t<input type=\"radio\" id=\"efectivo\" name=\"pago\" checked>\r\n\t\t\t<label for=\"efectivo\" class=\"radio\"><span></span>Efectivo</label>\r\n\t\t\t<input type=\"radio\" id=\"credito\" name=\"pago\">\r\n\t\t\t<label for=\"credito\" class=\"radio\"><span></span>Crédito</label>\r\n\r\n\t\t\t<br>\r\n\r\n\t\t\t<hr>\r\n\r\n\t\t\t<label for=\"mensaje\"></label>\r\n\t\t\t<textarea id=\"mensaje\" rows=\"10\" required></textarea>\r\n\r\n\t\t\t<input type=\"checkbox\" id=\"terminos\">\r\n\t\t\t<label for=\"terminos\" class=\"box\"><span></span><a href=\"archivo.pdf\" target=\"_blank\">Acepto términos y condiciones</a></label>\r\n\r\n\t\t\t\r\n\t\t\t<label id=\"labelEnviar\"></label>\r\n\t\t\t<input type=\"submit\" value=\"Enviar\">\r\n\r\n\t\t</form>\r\n\r\n\t</div>\r\n\t\r\n"

/***/ }),

/***/ "./src/app/formulario/formulario.component.ts":
/*!****************************************************!*\
  !*** ./src/app/formulario/formulario.component.ts ***!
  \****************************************************/
/*! exports provided: FormularioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormularioComponent", function() { return FormularioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormularioComponent = /** @class */ (function () {
    function FormularioComponent() {
    }
    FormularioComponent.prototype.ngOnInit = function () {
        setTimeout(function () {
            var pf = {
                entradas: document.querySelectorAll("input.validar"),
                valor: null,
                expresionRegular: null,
                validarUsuario: false,
                validarPassword: false,
                validarEmail: false,
                validarTerminos: null
            };
            var mf = {
                inicioFormulario: function () {
                    for (var i = 0; i < pf.entradas.length; i++) {
                        pf.entradas[i].addEventListener("focus", mf.enFoco);
                        pf.entradas[i].addEventListener("blur", mf.fueraFoco);
                        pf.entradas[i].addEventListener("change", mf.cambioEntrada);
                    }
                },
                enFoco: function (input) {
                    pf.valor = input.target.value;
                    if (pf.valor == "") {
                        document.querySelectorAll("#" + input.target.id)["0"].style.background = "rgba(255,255,0,.5)";
                        document.querySelectorAll("[for=" + input.target.id + "] .obligatorio")["0"].style.opacity = 1;
                    }
                    document.querySelector("[for=" + input.target.id + "]").appendChild(document.createElement("DIV")).setAttribute("class", "error");
                },
                fueraFoco: function (input) {
                    document.querySelectorAll("#" + input.target.id)["0"].style.background = "white";
                    document.querySelectorAll("[for=" + input.target.id + "] .obligatorio")["0"].style.opacity = 0;
                },
                cambioEntrada: function (input) {
                    pf.valor = input.target.value;
                    if (pf.valor != "") {
                        switch (input.target.id) {
                            case "nombre":
                                if (pf.valor.length < 2 || pf.valor.length > 6) {
                                    document.querySelector("[for=" + input.target.id + "] .error").innerHTML = '<span style="color:red">*Error al ingresar los datos: ' + input.target.placeholder + '</span>';
                                    pf.validarUsuario = false;
                                }
                                else {
                                    document.querySelector("[for=" + input.target.id + "] .error").parentNode.removeChild(document.querySelector("[for=" + input.target.id + "] .error"));
                                    pf.validarUsuario = true;
                                }
                                break;
                            case "password":
                                pf.expresionRegular = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/;
                                if (!pf.expresionRegular.test(pf.valor)) {
                                    document.querySelector("[for=" + input.target.id + "] .error").innerHTML = '<span style="color:red">*Error al ingresar los datos: ' + input.target.placeholder + '</span>';
                                    pf.validarPassword = false;
                                }
                                else {
                                    document.querySelector("[for=" + input.target.id + "] .error").parentNode.removeChild(document.querySelector("[for=" + input.target.id + "] .error"));
                                    pf.validarPassword = true;
                                }
                                break;
                            case "email":
                                pf.expresionRegular = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
                                if (!pf.expresionRegular.test(pf.valor)) {
                                    document.querySelector("[for=" + input.target.id + "] .error").innerHTML = '<span style="color:red">*Error al ingresar los datos: ' + input.target.placeholder + '</span>';
                                    pf.validarEmail = false;
                                }
                                else {
                                    document.querySelector("[for=" + input.target.id + "] .error").parentNode.removeChild(document.querySelector("[for=" + input.target.id + "] .error"));
                                    pf.validarEmail = true;
                                }
                                break;
                        }
                    }
                    else {
                        document.querySelector("[for=" + input.target.id + "] .error").parentNode.removeChild(document.querySelector("[for=" + input.target.id + "] .error"));
                    }
                },
                validarFormulario: function () {
                    pf.validarTerminos = document.querySelectorAll("#terminos")["0"].checked;
                    if (!pf.validarUsuario || !pf.validarPassword || !pf.validarEmail) {
                        document.querySelector("#labelEnviar").innerHTML = '<span style="color:red">¡*Tiene errores en los datos que ha ingresado, favor revisar de nuevo!</span>';
                        return false;
                    }
                    else if (!pf.validarTerminos) {
                        document.querySelector("#labelEnviar").innerHTML = '<span style="color:red">¡*Favor acepte términos y condiciones!</span>';
                        return false;
                    }
                    else {
                        return true;
                    }
                }
            };
            mf.inicioFormulario();
        }, 1000);
    };
    FormularioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-formulario',
            template: __webpack_require__(/*! ./formulario.component.html */ "./src/app/formulario/formulario.component.html"),
            styles: [__webpack_require__(/*! ./formulario.component.css */ "./src/app/formulario/formulario.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FormularioComponent);
    return FormularioComponent;
}());



/***/ }),

/***/ "./src/app/galeria-service.service.ts":
/*!********************************************!*\
  !*** ./src/app/galeria-service.service.ts ***!
  \********************************************/
/*! exports provided: GaleriaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaleriaService", function() { return GaleriaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _rutaglobal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rutaglobal */ "./src/app/rutaglobal.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { HttpClientModule } from '@angular/common/http'; 


var GaleriaService = /** @class */ (function () {
    function GaleriaService(_HttpClient) {
        this._HttpClient = _HttpClient;
        //this.url = "http://tutorialesatualcance.com/galeria.json";
        //ahi colocaremos la clase ruta del archivo rutaglobal.ts con su url
        //this.url = Ruta.url+"mostrarFotos";
        this.url = _rutaglobal__WEBPACK_IMPORTED_MODULE_2__["Ruta"].url;
    }
    /*==================================================================
            SELECCIONAR GALERIA
    ====================================================================*/
    GaleriaService.prototype.cargarJsonGaleria = function () {
        //let headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});            
        //return this._HttpClient.get(this.url, {headers:headers});
        //return this._HttpClient.get(this.url);
        return this._HttpClient.get(this.url + "mostrarFotos");
    };
    /*==================================================================
            NUEVO GALERIA
    ====================================================================*/
    //esta funcion se ejecuta en api.components.ts en la funcion nuevaFotoGaleria
    GaleriaService.prototype.subirFotoGaleria = function (url, token, foto) {
        if (!foto) {
            //crear varias opciones de respuesta solo se crean con Promise
            return new Promise(function (resolver, rechazar) {
                rechazar("no hay imagen para subir");
            });
        }
        else {
            return new Promise(function (resolver, rechazar) {
                //enviar un formulario en formdata
                var formData = new FormData();
                //requerimiento ajax
                var xhr = new XMLHttpRequest();
                //enviar la imagen
                formData.append("foto", foto[0]);
                //cuando el estado haya actualizado y cambiado
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4) {
                        if (xhr.status == 200) {
                            //traiga la respuesta del ajax
                            //resolver(JSON.parse(xhr.response))
                            resolver(xhr.response);
                        }
                        else {
                            rechazar(xhr.response);
                        }
                    }
                };
                xhr.open("POST", url, true);
                xhr.setRequestHeader("Authorization", token);
                //enviamos la peticion
                xhr.send(formData);
            });
        }
    };
    /*==============================================
        borrar foto funcion se ejcuta en galeria.component.ts
    ================================================*/
    GaleriaService.prototype.borrarItemFoto = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ "Content-Type": "application/json", "Authorization": localStorage.getItem("id") });
        return this._HttpClient.delete(this.url + "borrarfoto/" + id, { headers: headers });
    };
    GaleriaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
        //esta clase lo importo en api.component.ts
        ,
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GaleriaService);
    return GaleriaService;
}());



/***/ }),

/***/ "./src/app/galeria/galeria.component.css":
/*!***********************************************!*\
  !*** ./src/app/galeria/galeria.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/galeria/galeria.component.html":
/*!************************************************!*\
  !*** ./src/app/galeria/galeria.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 id=\"inicioGaleria\" class=\"row titulos\">\r\n\t\t\r\n\t\t<hr>\r\n\r\n\t\tGALERÍA DE IMÁGENES\r\n\r\n\t\t<hr>\r\n\r\n\t</h1>\r\n    <!--si galeriaJson viene cargado-->\r\n\t<div id=\"galeria\" class=\"row\" *ngIf=\"galeriaJson\">\r\n\t\t\r\n\t\t<ul>\r\n\t\t\t<li class=\"col-lg-2 col-md-3 col-sm-4 col-xs-12\" *ngFor=\"let galeria of galeriaJson\">\r\n            <!--<img src=\"{{galeria.foto}}\">-->\r\n            <!--ponemos la ruta completa de la imagen especificada galeria.component.ts-->\r\n                <!--<img src=\"{{url + '/' +galeria.foto}}\">-->\r\n                <img src=\"{{url + 'tomarimagengaleria/' + galeria.foto}}\">\r\n                <div *ngIf=\"identificado\">\r\n                                    \r\n                    <i (click) = \"borrarFoto(galeria)\" class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n                \r\n                </div>\r\n            \r\n            </li>\r\n\t\t\t\t\t\r\n\t\t</ul>\r\n\r\n\t</div>\r\n    <!--si galeriaJson no viene cargado-->\r\n    <span *ngIf=\"!galeriaJson\">Cargando Slide......</span> "

/***/ }),

/***/ "./src/app/galeria/galeria.component.ts":
/*!**********************************************!*\
  !*** ./src/app/galeria/galeria.component.ts ***!
  \**********************************************/
/*! exports provided: GaleriaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaleriaComponent", function() { return GaleriaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _galeria_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../galeria-service.service */ "./src/app/galeria-service.service.ts");
/* harmony import */ var _rutaglobal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rutaglobal */ "./src/app/rutaglobal.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GaleriaComponent = /** @class */ (function () {
    function GaleriaComponent(_GaleriaService) {
        var _this = this;
        this._GaleriaService = _GaleriaService;
        this._GaleriaService.cargarJsonGaleria().subscribe(function (resultado) {
            _this.galeriaJson = resultado.mostrandoFotos;
            //utilizamos esta propiedad this.url en la vista slide.component.html
            //this.url = Ruta.url+"tomarimagengaleria";
            //la ruta tomar-imagengalerio lo psamos al slide.component.html para no tener lios con otras funciones
            _this.url = _rutaglobal__WEBPACK_IMPORTED_MODULE_2__["Ruta"].url;
            //console.log("this.galeriaJson", this.galeriaJson);
        }, function (error) {
            var mensajeError = error;
        });
    }
    GaleriaComponent.prototype.ngOnInit = function () {
        //para elimina icono editar y borrar en el frontend
        this.identificado = localStorage.getItem("id");
        setTimeout(function () {
            var pg = {
                imgGaleria: document.querySelectorAll("#galeria ul li img"),
                rutaImagen: null,
                cuerpoDom: document.querySelector("body"),
                lightbox: null,
                modal: null,
                animacionGaleria: "fade"
            };
            var mg = {
                inicioGaleria: function () {
                    for (var i = 0; i < pg.imgGaleria.length; i++) {
                        pg.imgGaleria[i].addEventListener("click", mg.capturaImagen);
                    }
                },
                capturaImagen: function (img) {
                    pg.rutaImagen = img.target;
                    mg.lightbox(pg.rutaImagen);
                },
                lightbox: function (img) {
                    pg.cuerpoDom.appendChild(document.createElement("DIV")).setAttribute("id", "lightbox");
                    pg.lightbox = document.querySelector("#lightbox");
                    pg.lightbox.style.width = "100%";
                    pg.lightbox.style.height = "100%";
                    pg.lightbox.style.position = "fixed";
                    pg.lightbox.style.zIndex = "10";
                    pg.lightbox.style.background = "rgba(0,0,0,.8)";
                    pg.lightbox.style.top = 0;
                    pg.lightbox.style.lefts = 0;
                    pg.lightbox.appendChild(document.createElement("DIV")).setAttribute("id", "modal");
                    pg.modal = document.querySelector("#modal");
                    pg.modal.innerHTML = img.outerHTML + "<div>x</div>";
                    pg.modal.style.display = "block";
                    pg.modal.style.position = "relative";
                    pg.modal.childNodes[0].style.width = "100%";
                    pg.modal.childNodes[0].style.border = "15px solid white";
                    if (window.matchMedia("(max-width:1000px)").matches) {
                        pg.modal.style.width = "90%";
                    }
                    else {
                        pg.modal.style.width = "60%";
                    }
                    if (pg.animacionGaleria == "slideLeft") {
                        pg.modal.style.top = "50%";
                        pg.modal.style.left = 0;
                        pg.modal.style.opacity = 0;
                        setTimeout(function () {
                            pg.modal.style.transition = ".5s left ease";
                            pg.modal.style.left = "50%";
                            pg.modal.style.opacity = 1;
                            pg.modal.style.marginLeft = -pg.modal.childNodes[0].width / 2 + "px";
                            pg.modal.style.marginTop = -pg.modal.childNodes[0].height / 2 + "px";
                        }, 50);
                    }
                    if (pg.animacionGaleria == "slideTop") {
                        pg.modal.style.top = "-100%";
                        pg.modal.style.left = "50%";
                        pg.modal.style.opacity = 0;
                        setTimeout(function () {
                            pg.modal.style.transition = ".5s top ease";
                            pg.modal.style.top = "50%";
                            pg.modal.style.opacity = 1;
                            pg.modal.style.marginLeft = -pg.modal.childNodes[0].width / 2 + "px";
                            pg.modal.style.marginTop = -pg.modal.childNodes[0].height / 2 + "px";
                        }, 50);
                    }
                    if (pg.animacionGaleria == "fade") {
                        pg.modal.style.top = "50%";
                        pg.modal.style.left = "50%";
                        pg.modal.style.opacity = 0;
                        setTimeout(function () {
                            pg.modal.style.transition = ".5s opacity ease";
                            pg.modal.style.opacity = 1;
                            pg.modal.style.marginLeft = -pg.modal.childNodes[0].width / 2 + "px";
                            pg.modal.style.marginTop = -pg.modal.childNodes[0].height / 2 + "px";
                        }, 50);
                    }
                    pg.modal.childNodes[1].style.position = "absolute";
                    pg.modal.childNodes[1].style.right = "5px";
                    pg.modal.childNodes[1].style.top = "5px";
                    pg.modal.childNodes[1].style.color = "silver";
                    pg.modal.childNodes[1].style.cursor = "pointer";
                    pg.modal.childNodes[1].style.fontSize = "30px";
                    pg.modal.childNodes[1].style.width = "40px";
                    pg.modal.childNodes[1].style.height = "40px";
                    pg.modal.childNodes[1].style.textAlign = "center";
                    pg.modal.childNodes[1].style.background = "white";
                    pg.modal.childNodes[1].style.borderRadius = "0px 0px 0px 5px";
                    pg.modal.childNodes[1].addEventListener("click", mg.salirGaleria);
                },
                salirGaleria: function () {
                    pg.lightbox.parentNode.removeChild(pg.lightbox);
                }
            };
            mg.inicioGaleria();
        }, 1000);
    };
    /*=============================================
     BORRAR FOTO GALERIA FUNCION SE EJECUTA EN  GALERIA.HTML
    ===============================================*/
    GaleriaComponent.prototype.borrarFoto = function (galeria) {
        //capturar el slide
        var id = galeria._id;
        // esa funcion borrarItemSlide lo creamos en galeria.service
        this._GaleriaService.borrarItemFoto(id).subscribe(function (resultado) {
            window.location.reload();
        }, function (error) {
            console.log("error", error);
        });
    };
    GaleriaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-galeria',
            template: __webpack_require__(/*! ./galeria.component.html */ "./src/app/galeria/galeria.component.html"),
            styles: [__webpack_require__(/*! ./galeria.component.css */ "./src/app/galeria/galeria.component.css")],
            providers: [_galeria_service_service__WEBPACK_IMPORTED_MODULE_1__["GaleriaService"]]
        }),
        __metadata("design:paramtypes", [_galeria_service_service__WEBPACK_IMPORTED_MODULE_1__["GaleriaService"]])
    ], GaleriaComponent);
    return GaleriaComponent;
}());



/***/ }),

/***/ "./src/app/index/index.component.css":
/*!*******************************************!*\
  !*** ./src/app/index/index.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/index/index.component.html":
/*!********************************************!*\
  !*** ./src/app/index/index.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<section id=\"fotoFondo\"></section>\r\n\r\n<div class=\"content-fluid\">\r\n\t\r\n\t<!--=====================================\r\n\tCABEZOTE   \r\n\t======================================-->\r\n\r\n\t<header id=\"cabezote\" class=\"row\">\r\n\t\t\r\n\t\t<figure id=\"logotipo\" class=\"col-lg-2 col-md-3 col-sm-3 col-xs-12\">\r\n\t\t\t\r\n\t\t\t<img src=\"assets/img/logotipo.png\" alt=\"Logo\">\r\n\r\n\t\t</figure>\r\n\r\n\t\t<div class=\"col-lg-4 col-md-2 col-sm-1 col-xs-0\">\r\n\t\t\t\r\n\t\t\t<br>\r\n\r\n\t\t</div>\r\n\r\n\t\t<div id=\"btnMovil\" class=\"col-lg-0 col-md-0 col-sm-0 col-xs-12\">\r\n\t\t\t\r\n\t\t\t<span class=\"fa fa-bars\"></span>\t\r\n\r\n\t\t</div>\r\n\r\n\t\t<nav class=\"col-lg-6 col-md-7 col-sm-8 col-xs-0\">\r\n\t\t\t\r\n\t\t\t<ul>\r\n\t\t\t\t<li class=\"col-lg-2 col-md-2 col-sm-2 col-xs-12\"><a href=\"#cabezote\">Inicio</a></li>\r\n\t\t\t\t<li class=\"col-lg-2 col-md-2 col-sm-2 col-xs-12\"><a href=\"#inicioGaleria\">Galería</a></li>\r\n\t\t\t\t<li class=\"col-lg-2 col-md-2 col-sm-2 col-xs-12\"><a href=\"#inicioMouse\">Mouse</a></li>\r\n\t\t\t\t<li class=\"col-lg-2 col-md-2 col-sm-2 col-xs-12\"><a href=\"#inicioScroll\">Scroll</a></li>\r\n\t\t\t\t<li class=\"col-lg-2 col-md-2 col-sm-2 col-xs-12\"><a href=\"#inicioFormulario\">Form</a></li>\r\n\t\t\t\t<li class=\"col-lg-2 col-md-2 col-sm-2 col-xs-12\"><a [routerLink]=\"['/api']\">Angular</a></li>\r\n\t\t\t</ul>\r\n\r\n\t\t</nav>\r\n\r\n\t</header>\r\n\r\n\t<!--=====================================\r\n\tSLIDESHOW  \r\n\t======================================-->\r\n\r\n        <app-slide></app-slide>\r\n\t\r\n\t<!--=====================================\r\n\tGALERIA \r\n\t======================================-->\r\n\t\r\n\t    <app-galeria></app-galeria>\r\n\t\r\n\t<!--=====================================\r\n\tEFECTO DE MOUSE\r\n\t======================================-->\r\n\r\n\t    <app-mouse></app-mouse>\r\n\r\n\t<!--=====================================\r\n\tEFECTO DE SCROLL\r\n\t======================================-->\r\n\r\n\t    <app-scroll></app-scroll>\r\n\r\n\t<!--=====================================\r\n\tFORMULARIO\r\n\t======================================-->\r\n\r\n\t    <app-formulario></app-formulario>\r\n\t\r\n   \r\n</div>"

/***/ }),

/***/ "./src/app/index/index.component.ts":
/*!******************************************!*\
  !*** ./src/app/index/index.component.ts ***!
  \******************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IndexComponent = /** @class */ (function () {
    function IndexComponent() {
    }
    IndexComponent.prototype.ngOnInit = function () {
        setTimeout(function () {
            var pb = {
                botonMovil: document.querySelector("#btnMovil span"),
                vistaBotones: false,
                botonera: document.querySelector("nav"),
                botones: document.querySelectorAll("nav ul li a")
            };
            var mb = {
                inicioMovil: function () {
                    pb.botonMovil.addEventListener("click", mb.mostrarBotonera);
                    for (var i = 0; i < pb.botones.length; i++) {
                        pb.botones[i].addEventListener("click", mb.ocultarBotonera);
                    }
                },
                mostrarBotonera: function () {
                    if (!pb.vistaBotones) {
                        pb.vistaBotones = true;
                        pb.botonera.className = "col-lg-6 col-md-7 col-sm-8 col-xs-12";
                    }
                    else {
                        pb.vistaBotones = false;
                        pb.botonera.className = "col-lg-6 col-md-7 col-sm-8 col-xs-0";
                    }
                },
                ocultarBotonera: function () {
                    if (window.matchMedia("(max-width:767px)").matches) {
                        pb.vistaBotones = false;
                        pb.botonera.className = "col-lg-6 col-md-7 col-sm-8 col-xs-0";
                    }
                }
            };
            mb.inicioMovil();
        }, 1000);
    };
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.css */ "./src/app/index/index.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/modelo/slides/slides.module.ts":
/*!************************************************!*\
  !*** ./src/app/modelo/slides/slides.module.ts ***!
  \************************************************/
/*! exports provided: ItemSlides */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemSlides", function() { return ItemSlides; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//poder realizar two data binding en el formulario de slide en api.component.html


var ItemSlides = /** @class */ (function () {
    function ItemSlides(imagen, titulo, descripcion) {
        this.imagen = imagen;
        this.titulo = titulo;
        this.descripcion = descripcion;
    }
    ItemSlides = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: []
        })
        //importar componente en api.component.ts
        ,
        __metadata("design:paramtypes", [String, String, String])
    ], ItemSlides);
    return ItemSlides;
}());



/***/ }),

/***/ "./src/app/modelo/usuarios/usuarios.module.ts":
/*!****************************************************!*\
  !*** ./src/app/modelo/usuarios/usuarios.module.ts ***!
  \****************************************************/
/*! exports provided: ListaUsuarios */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaUsuarios", function() { return ListaUsuarios; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListaUsuarios = /** @class */ (function () {
    function ListaUsuarios(usuario, password) {
        this.usuario = usuario;
        this.password = password;
    }
    ListaUsuarios = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: []
        })
        //importar en el componente de la api-component.ts 
        ,
        __metadata("design:paramtypes", [String, String])
    ], ListaUsuarios);
    return ListaUsuarios;
}());



/***/ }),

/***/ "./src/app/mouse/mouse.component.css":
/*!*******************************************!*\
  !*** ./src/app/mouse/mouse.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/mouse/mouse.component.html":
/*!********************************************!*\
  !*** ./src/app/mouse/mouse.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 id=\"inicioMouse\" class=\"row titulos\">\r\n\t\t\r\n\t\t<hr>\r\n\r\n\t\tMOVIMIENTO CON EL MOUSE\r\n\r\n\t\t<hr>\r\n\r\n\t</h1>\r\n\r\n\t<div id=\"efectoMouse\" class=\"row\">\r\n\t\t\r\n\t\t<figure></figure>\r\n\t\t<figure></figure>\r\n\t\t<figure></figure>\r\n\r\n\t</div>\r\n"

/***/ }),

/***/ "./src/app/mouse/mouse.component.ts":
/*!******************************************!*\
  !*** ./src/app/mouse/mouse.component.ts ***!
  \******************************************/
/*! exports provided: MouseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MouseComponent", function() { return MouseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MouseComponent = /** @class */ (function () {
    function MouseComponent() {
    }
    MouseComponent.prototype.ngOnInit = function () {
        setTimeout(function () {
            var pm = {
                zona: document.querySelectorAll("#efectoMouse"),
                figuras: document.querySelectorAll("#efectoMouse figure"),
                mouseX: 0,
                mouseY: 0,
                horizontal: true,
                vertical: false
            };
            var mm = {
                inicioMouse: function () {
                    pm.zona["0"].addEventListener("mousemove", mm.movimientoMouse);
                    for (var i = 0; i < pm.figuras.length; i++) {
                        pm.figuras[i].innerHTML = '<img src="assets/img/mouse/plano0' + i + '.png">';
                        pm.figuras["" + i].style.zIndex = -i;
                    }
                    setTimeout(function () {
                        pm.zona["0"].style.height = pm.figuras[0].childNodes["0"].height + "px";
                    }, 100);
                },
                movimientoMouse: function (mouse) {
                    pm.mouseX = mouse.offsetX;
                    pm.mouseY = mouse.offsetY;
                    for (var i = 0; i < pm.figuras.length; i++) {
                        if (pm.horizontal) {
                            pm.figuras["" + i].style.left = -pm.mouseX / (i * 100 + 50) + "%";
                        }
                        if (pm.vertical) {
                            pm.figuras["" + i].style.top = pm.mouseY / (i * 100 + 50) + "%";
                        }
                    }
                }
            };
            mm.inicioMouse();
        }, 1000);
    };
    MouseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mouse',
            template: __webpack_require__(/*! ./mouse.component.html */ "./src/app/mouse/mouse.component.html"),
            styles: [__webpack_require__(/*! ./mouse.component.css */ "./src/app/mouse/mouse.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MouseComponent);
    return MouseComponent;
}());



/***/ }),

/***/ "./src/app/rutaglobal.ts":
/*!*******************************!*\
  !*** ./src/app/rutaglobal.ts ***!
  \*******************************/
/*! exports provided: Ruta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ruta", function() { return Ruta; });
/*ponemos las rutas global para los distintos gestores (usuarios, slides, galerias y los que vayamos creando) la cual las importaremos en los servicios,demos cuando lo hagamos en modo produccion cambiaremos la ruta. Esta ruta la importamos en los servicios.ts de usuarios, slide, galerias y en los componentes*/
var Ruta = {
    url: "http://localhost:1234/api/"
};


/***/ }),

/***/ "./src/app/scroll/scroll.component.css":
/*!*********************************************!*\
  !*** ./src/app/scroll/scroll.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/scroll/scroll.component.html":
/*!**********************************************!*\
  !*** ./src/app/scroll/scroll.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 id=\"inicioScroll\" class=\"row titulos\">\r\n\t\t\r\n\t\t<hr>\r\n\r\n\t\tEFECTOS CON EL SCROLL\r\n\r\n\t\t<hr>\r\n\r\n\t</h1>\r\n\r\n\t<div id=\"scroll\">\r\n\r\n\t<!-- ARTÍCULO 1\t -->\r\n\t\r\n\t\t<article class=\"row\">\r\n\t\t\t\r\n\t\t\t<div class=\"col-lg-2 col-md-2 col-sm-1 col-xs-0\">\r\n\t\t\t<br>\r\n\t\t\t</div>\r\n\r\n\t\t\t<aside class=\"col-lg-8 col-md-8 col-sm-10 col-xs-12\">\r\n\t\t\t\t\r\n\t\t\t\t<figure class=\"col-lg-3 col-md-5 col-sm-6 col-xs-12\">\r\n\t\t\t\t\r\n\t\t\t\t\t<img src=\"assets/img/galeria/01.jpg\">\t\r\n\r\n\t\t\t\t</figure>\r\n\r\n\t\t\t\t<div class=\"col-lg-9 col-md-7 col-sm-6 col-xs-12\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t<h1>Lorem Ipsum</h1>\r\n\r\n\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus perspiciatis qui repellat, aperiam amet dignissimos.</p>\r\n\r\n\t\t\t\t\t<button>Leer Más</button>\r\n\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</aside>\r\n\r\n\t\t\t<div class=\"col-lg-2 col-md-2 col-sm-1 col-xs-0\">\r\n\t\t\t<br>\r\n\t\t\t</div>\r\n\r\n\t\t</article>\r\n\r\n\t\t<!-- ARTÍCULO 2\t -->\r\n\r\n\t\t<article class=\"row\">\r\n\t\t\t\r\n\t\t\t<div class=\"col-lg-2 col-md-2 col-sm-1 col-xs-0\">\r\n\t\t\t<br>\r\n\t\t\t</div>\r\n\r\n\t\t\t<aside class=\"col-lg-8 col-md-8 col-sm-10 col-xs-12\">\r\n\t\t\t\t\r\n\t\t\t\t<figure class=\"col-lg-3 col-md-5 col-sm-6 col-xs-12\">\r\n\t\t\t\t\r\n\t\t\t\t\t<img src=\"assets/img/galeria/02.jpg\">\t\r\n\r\n\t\t\t\t</figure>\r\n\r\n\t\t\t\t<div class=\"col-lg-9 col-md-7 col-sm-6 col-xs-12\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t<h1>Lorem Ipsum</h1>\r\n\r\n\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus perspiciatis qui repellat, aperiam amet dignissimos.</p>\r\n\r\n\t\t\t\t\t<button>Leer Más</button>\r\n\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</aside>\r\n\r\n\t\t\t<div class=\"col-lg-2 col-md-2 col-sm-1 col-xs-0\">\r\n\t\t\t<br>\r\n\t\t\t</div>\r\n\r\n\t\t</article>\r\n\r\n\t\t<!-- ARTÍCULO 3\t -->\t\r\n\r\n\t\t<article class=\"row\">\r\n\t\t\t\r\n\t\t\t<div class=\"col-lg-2 col-md-2 col-sm-1 col-xs-0\">\r\n\t\t\t<br>\r\n\t\t\t</div>\r\n\r\n\t\t\t<aside class=\"col-lg-8 col-md-8 col-sm-10 col-xs-12\">\r\n\t\t\t\t\r\n\t\t\t\t<figure class=\"col-lg-3 col-md-5 col-sm-6 col-xs-12\">\r\n\t\t\t\t\r\n\t\t\t\t\t<img src=\"assets/img/galeria/03.jpg\">\t\r\n\r\n\t\t\t\t</figure>\r\n\r\n\t\t\t\t<div class=\"col-lg-9 col-md-7 col-sm-6 col-xs-12\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t<h1>Lorem Ipsum</h1>\r\n\r\n\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus perspiciatis qui repellat, aperiam amet dignissimos.</p>\r\n\r\n\t\t\t\t\t<button>Leer Más</button>\r\n\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</aside>\r\n\r\n\t\t\t<div class=\"col-lg-2 col-md-2 col-sm-1 col-xs-0\">\r\n\t\t\t<br>\r\n\t\t\t</div>\r\n\r\n\t\t</article>\r\n\r\n\t\t<!-- ARTÍCULO 4\t -->\r\n\r\n\t\t<article class=\"row\">\r\n\t\t\t\r\n\t\t\t<div class=\"col-lg-2 col-md-2 col-sm-1 col-xs-0\">\r\n\t\t\t<br>\r\n\t\t\t</div>\r\n\r\n\t\t\t<aside class=\"col-lg-8 col-md-8 col-sm-10 col-xs-12\">\r\n\t\t\t\t\r\n\t\t\t\t<figure class=\"col-lg-3 col-md-5 col-sm-6 col-xs-12\">\r\n\t\t\t\t\r\n\t\t\t\t\t<img src=\"assets/img/galeria/04.jpg\">\t\r\n\r\n\t\t\t\t</figure>\r\n\r\n\t\t\t\t<div class=\"col-lg-9 col-md-7 col-sm-6 col-xs-12\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t<h1>Lorem Ipsum</h1>\r\n\r\n\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus perspiciatis qui repellat, aperiam amet dignissimos.</p>\r\n\r\n\t\t\t\t\t<button>Leer Más</button>\r\n\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</aside>\r\n\r\n\t\t\t<div class=\"col-lg-2 col-md-2 col-sm-1 col-xs-0\">\r\n\t\t\t<br>\r\n\t\t\t</div>\r\n\r\n\t\t</article>\t\t\r\n\r\n\t</div>"

/***/ }),

/***/ "./src/app/scroll/scroll.component.ts":
/*!********************************************!*\
  !*** ./src/app/scroll/scroll.component.ts ***!
  \********************************************/
/*! exports provided: ScrollComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollComponent", function() { return ScrollComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScrollComponent = /** @class */ (function () {
    function ScrollComponent() {
    }
    ScrollComponent.prototype.ngOnInit = function () {
        setTimeout(function () {
            var ps = {
                posicionScroll: 0,
                articulos: document.querySelectorAll("#scroll article"),
                cajaScroll: document.querySelectorAll("#scroll"),
                cabezote: document.querySelectorAll("header"),
                botonera: document.querySelectorAll("nav ul li a"),
                ruta: null,
                intervalo: null,
                destinoScroll: 0,
                padding: 0
            };
            var ms = {
                inicioScroll: function () {
                    document.addEventListener("scroll", ms.efectoParallax);
                    //el ultimo boton no de error debemos especificar 5 elementoa (0 al 5) pore eso restamos -1
                    for (var i = 0; i < ps.botonera.length - 1; i++) {
                        ps.botonera[i].addEventListener("click", ms.desplazamiento);
                    }
                },
                efectoParallax: function () {
                    ps.posicionScroll = window.pageYOffset;
                    if (ps.posicionScroll > 100) {
                        ps.cabezote["0"].style.position = "fixed";
                        ps.cabezote["0"].style.zIndex = 10;
                        if (window.matchMedia("(min-width:768px)").matches) {
                            ps.padding = 80;
                        }
                        else {
                            ps.padding = 140;
                        }
                    }
                    else {
                        ps.cabezote["0"].style.position = "relative";
                        ps.cabezote["0"].style.zIndex = 0;
                        if (window.matchMedia("(min-width:768px)").matches) {
                            ps.padding = 180;
                        }
                        else {
                            ps.padding = 280;
                        }
                    }
                    if (ps.posicionScroll > ps.cajaScroll["0"].offsetTop - 200) {
                        for (var i = 0; i < ps.articulos.length; i++) {
                            ps.articulos["" + i].style.marginLeft = "0%";
                        }
                    }
                    else {
                        for (var i = 0; i < ps.articulos.length; i++) {
                            if (window.matchMedia("(min-width:768px)").matches) {
                                ps.articulos["" + i].style.marginLeft = ps.posicionScroll / 22.8 - 100 + "%";
                            }
                        }
                    }
                },
                desplazamiento: function (ruta) {
                    ruta.preventDefault();
                    ps.ruta = ruta.target.getAttribute("href");
                    ps.destinoScroll = document.querySelector(ps.ruta).offsetTop - ps.padding;
                    ps.intervalo = setInterval(function () {
                        if (ps.posicionScroll < ps.destinoScroll) {
                            ps.posicionScroll += 100;
                            if (ps.posicionScroll >= ps.destinoScroll) {
                                ps.posicionScroll = ps.destinoScroll;
                                clearInterval(ps.intervalo);
                            }
                        }
                        else {
                            ps.posicionScroll -= 100;
                            if (ps.posicionScroll <= ps.destinoScroll) {
                                ps.posicionScroll = ps.destinoScroll;
                                clearInterval(ps.intervalo);
                            }
                        }
                        window.scrollTo(0, ps.posicionScroll);
                    }, 50);
                }
            };
            ms.inicioScroll();
        }, 1000);
    };
    ScrollComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-scroll',
            template: __webpack_require__(/*! ./scroll.component.html */ "./src/app/scroll/scroll.component.html"),
            styles: [__webpack_require__(/*! ./scroll.component.css */ "./src/app/scroll/scroll.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ScrollComponent);
    return ScrollComponent;
}());



/***/ }),

/***/ "./src/app/slide-service.service.ts":
/*!******************************************!*\
  !*** ./src/app/slide-service.service.ts ***!
  \******************************************/
/*! exports provided: SlideService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideService", function() { return SlideService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _rutaglobal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rutaglobal */ "./src/app/rutaglobal.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SlideService = /** @class */ (function () {
    function SlideService(_HttpClient) {
        this._HttpClient = _HttpClient;
        //this.url = "http://tutorialesatualcance.com/slide.json";
        //ahi colocaremos la clase ruta del archivo rutaglobal.ts con su url
        //this.url = Ruta.url+"mostrarSlides";
        this.url = _rutaglobal__WEBPACK_IMPORTED_MODULE_2__["Ruta"].url;
    }
    /*==================================================================
            SELECCIONAR SLIDE
    ====================================================================*/
    SlideService.prototype.cargarJsonSlide = function () {
        /*peticion por get a tes URL, devolviendo la respuesta que nos de el método, haciendo una llamada al objeto http que ya tenenemos cargado en la propiedad privada*/
        /*Como parametroa debemos pasar la URL y capturamos la respuesta que nos de esa peticion por GET con el metodo MAP()*/
        /*En callback con una funcion de flecha recogemos la respuesta que viene en el primer parametro y lo convertimos en formato json utilizando el metodo JSON*/
        //let headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
        // return this._HttpClient.get(this.url, {headers:headers});
        //return this._HttpClient.get(this.url);
        return this._HttpClient.get(this.url + "mostrarSlides");
    };
    /*==================================================================
            NUEVO SLIDE
    ====================================================================*/
    //esta funcion se ejecuta en api.components.ts en la funcion nuevoSlide
    SlideService.prototype.subirImagenSlide = function (url, items, token, imagen) {
        if (!imagen) {
            //crear varias opciones de respuesta solo se crean con Promise
            return new Promise(function (resolver, rechazar) {
                rechazar("no hay imagen para subir");
            });
        }
        else {
            return new Promise(function (resolver, rechazar) {
                //enviar un formulario en formdata
                var formData = new FormData();
                //requerimiento ajax
                var xhr = new XMLHttpRequest();
                //enviar la imagen
                formData.append("imagen", imagen[0]);
                formData.append("titulo", items.titulo);
                formData.append("descripcion", items.descripcion);
                //cuando el estado haya actualizado y cambiado
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4) {
                        if (xhr.status == 200) {
                            //traiga la respuesta del ajax
                            //resolver(JSON.parse(xhr.response))
                            resolver(xhr.response);
                        }
                        else {
                            rechazar(xhr.response);
                        }
                    }
                };
                xhr.open("POST", url, true);
                xhr.setRequestHeader("Authorization", token);
                //enviamos la peticion
                xhr.send(formData);
            });
        }
    };
    /*=============================================
   ACTUALIZAR SLIDE
  =============================================*/
    SlideService.prototype.actualizarItemSlide = function (url, items, token, imagen) {
        //cuando no se quiere actualizar la imagen
        if (!imagen) {
            return new Promise(function (resolver, rechazar) {
                var formData = new FormData();
                var xhr = new XMLHttpRequest();
                formData.append("titulo", items.titulo);
                formData.append("descripcion", items.descripcion);
                //viene slides.controlador.js
                formData.append("actualizarImagen", 0);
                formData.append("rutaImagenActual", items.imagen);
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4) {
                        if (xhr.status == 200) {
                            resolver(JSON.parse(xhr.response));
                        }
                        else {
                            rechazar(xhr.response);
                        }
                    }
                };
                xhr.open("PUT", url, true);
                xhr.setRequestHeader("Authorization", token);
                xhr.send(formData);
            });
        }
        else {
            return new Promise(function (resolver, rechazar) {
                var formData = new FormData();
                var xhr = new XMLHttpRequest();
                formData.append("imagen", imagen[0]);
                formData.append("titulo", items.titulo);
                formData.append("descripcion", items.descripcion);
                //viene slides.controlador.js
                formData.append("actualizarImagen", 1);
                formData.append("rutaImagenActual", items.imagen);
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4) {
                        if (xhr.status == 200) {
                            resolver(JSON.parse(xhr.response));
                        }
                        else {
                            rechazar(xhr.response);
                        }
                    }
                };
                xhr.open("PUT", url, true);
                xhr.setRequestHeader("Authorization", token);
                xhr.send(formData);
            });
        }
    };
    /*==============================================
        borrar slide funcion se ejcuta en slide.component.ts
    ================================================*/
    SlideService.prototype.borrarItemSlide = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ "Content-Type": "application/json", "Authorization": localStorage.getItem("id") });
        return this._HttpClient.delete(this.url + "borrarslide/" + id, { headers: headers });
    };
    SlideService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SlideService);
    return SlideService;
}());



/***/ }),

/***/ "./src/app/slide/slide.component.css":
/*!*******************************************!*\
  !*** ./src/app/slide/slide.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/slide/slide.component.html":
/*!********************************************!*\
  !*** ./src/app/slide/slide.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--=============================================\r\n   las directivas.- son pequeñas funcionalidades que se utilizan en la vista de angular\r\n    usamos la directiva llamado *ngFor, es una directiva para usar bucles, lo hacemos con el li.\r\n    *ngIf es una directiva para condicionales lo cargamos en div\r\n===============================================-->\r\n\r\n        <!--si slideJson  viene cargado-->\r\n<div id=\"slide\" class=\"row\" *ngIf=\"slideJson\">\r\n\t\t\r\n\t\t<ul>\r\n\t\t\t\r\n\t\t\t<li *ngFor =\"let slide of slideJson\">\t\t\t\t\r\n\t\t\t\t<!--<img src=\"{{slide.imagen}}\">-->\r\n                <!--ponemos la ruta completa de la imagen especificada slide.component.ts-->\r\n                \r\n                <!--<img src=\"{{url + '/' + slide.imagen}}\">-->\r\n               <img src=\"{{url + 'tomarimagenslide/' + slide.imagen}}\">\r\n\t\t\t\t<div class=\"textoSlide\">\r\n\t\t\t\t\t<h1>{{slide.titulo}}</h1>\r\n\t\t\t\t\t<h3>{{slide.descripcion}}</h3>\r\n\t\t\t\t</div>\r\n                <!--agregar boton de editar y delete cuando el usuario se haya identificado y pasar public= identificado al slide.compont.ts del api.component.ts-->\r\n                <div id=\"gestorSlide\" *ngIf=\"identificado\">\r\n                    <!--editar-->\r\n                    <i (click)=\"editarSlide(slide)\" class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\r\n                    <i (click) = \"borrarSlide(slide)\" class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n                \r\n                </div>\r\n\t\t\t</li>\r\n\r\n\t\t\t\r\n\t\t</ul>\r\n\r\n\t\t<ol id=\"paginacion\">\r\n\t\t\t<!--me de los indice let i = index que no empiece por 0 (value=\"{{i+1}}\")-->\r\n\t\t\t<li *ngFor=\"let slide of slideJson; let i = index\" value=\"{{i+1}}\"><span class=\"fa fa-circle\"></span></li>\r\n\t\t\t\r\n\t\t</ol>\r\n\r\n\t\t<div class=\"flechas\" id=\"retroceder\"><span class=\"fa fa-chevron-left\"></span></div>\r\n\t\t<div class=\"flechas\" id=\"avanzar\"><span class=\"fa fa-chevron-right\"></span></div>\r\n        <div class=\"gestores\" *ngIf=\"formEditarSlide\" style=\"position:absolute; background:rgba(0,0,0,.8); width: 100%; height: 100%; top: 0px; left: 0px; z-index:10\">\r\n            \r\n            <form #formSlide =\"ngForm\" (ngSubmit) =\"actualizarSlide()\" style=\"background: rgba(255,255,255,.5); padding: 30px\">\r\n                <h2>Actualizar slide</h2>\r\n                <input type=\"text\" placeholder=\"Título.....\" name=\"titulo\" #titulo=\"ngModel\" [(ngModel)]=\"itemSlides.titulo\" required>\r\n            \r\n            <textarea maxlength=\"55\" placeholder=\"Descripcion.....\" name=\"descripcion\" #titulo=\"ngModel\" [(ngModel)]=\"itemSlides.descripcion\" required></textarea>\r\n            <div *ngIf=\"!cambiarImagen\">\r\n                <!--nos traemos la imagen de la ruta-->\r\n                <img src=\"{{url + 'tomarimagenslide/' + itemSlides.imagen}}\" style=\"width: 20%; margin: 10px 0px 0px 40%\">\r\n                \r\n                <br>\r\n            <!--creamos un boton con el proposito si el usuario no quiera cambiar la imagen no aparezca seleccionar archivo-->    \r\n                <button (click)=\"cambiarImagen = true\" style=\"width: 20%; margin: 10px 0px 0px 40%\">Cambiar imagen</button>\r\n            </div>\r\n                <!--si hacemos click al boton cambiarImagen aparezca seleccionararchivo-->\r\n                <div *ngIf=\"cambiarImagen\">\r\n                    <!--enviar un archivo desde angular al apirest utilizo atributo(change)=\"metodo de angular\" lo creo esa funcion o motodo de angular en api.component.ts-->\r\n                    <input type=\"file\" (change)=\"cargarFichero($event)\" required>\r\n                </div>    \r\n             <input type=\"submit\" value=\"enviar\"> \r\n            <!--al hacer click salimos del editor slide-->\r\n                <button (click)=\"formEditarSlide= false\" style=\"color: white; background:rgba(0,0,0,1); border: 0px; font-size: 24px; position: absolute; right: 30px; top:30px; cursor: pointer\">x</button>\r\n            </form>    \r\n            \r\n        </div>    \r\n\t</div>\r\n    <!--si slideJson no viene cargado-->\r\n    <span *ngIf=\"!slideJson\">Cargando Slide......</span> \r\n"

/***/ }),

/***/ "./src/app/slide/slide.component.ts":
/*!******************************************!*\
  !*** ./src/app/slide/slide.component.ts ***!
  \******************************************/
/*! exports provided: SlideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideComponent", function() { return SlideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _slide_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../slide-service.service */ "./src/app/slide-service.service.ts");
/* harmony import */ var _modelo_slides_slides_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modelo/slides/slides.module */ "./src/app/modelo/slides/slides.module.ts");
/* harmony import */ var _rutaglobal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rutaglobal */ "./src/app/rutaglobal.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//importamos la clase del servicio Slide

//importamos el modelo para modificar sus propiedades


var SlideComponent = /** @class */ (function () {
    /*nos traemos todas las acciones que se estan ejecutando en el servicio slide, creando una propiedad privada que va a traer todo lo que se esta ejecutando en el servicio del slide es decir la funcion prueba del archivo slide-service.service.ts*/
    function SlideComponent(_SlideService) {
        /*===============================================
          PETICIONES HTTP PARA TRAER EL ARCHIVO JSON
        =================================================*/
        var _this = this;
        this._SlideService = _SlideService;
        this.formEditarSlide = false;
        //propiedad si hacemos click cambiarImagen aparezca seleccionar archivo
        this.cambiarImagen = false;
        this.validarIngreso = false;
        this._SlideService.cargarJsonSlide().subscribe(function (resultado) {
            //mostrandoSlides lo tomo desde la consola
            _this.slideJson = resultado.mostrandoSlides;
            //utilizamos esta propiedad this.url en la vista slide.component.html
            //this.url = Ruta.url+"tomarimagenslide";
            //la ruta tomarimagenslide lo ponemos en slide.component.html
            _this.url = _rutaglobal__WEBPACK_IMPORTED_MODULE_3__["Ruta"].url;
        }, function (error) {
            var mensajeError = error;
        });
    }
    SlideComponent.prototype.ngOnInit = function () {
        //para elimina icono editar y borrar en el frontend
        this.identificado = localStorage.getItem("id");
        setTimeout(function () {
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
            };
            var m = {
                inicioSlide: function () {
                    for (var i = 0; i < p.paginacion.length; i++) {
                        p.paginacion[i].addEventListener("click", m.paginacionSlide);
                        p.imgSlide["" + i].style.width = (100 / p.paginacion.length) + "%";
                    }
                    p.avanzar.addEventListener("click", m.avanzar);
                    p.retroceder.addEventListener("click", m.retroceder);
                    m.intervalo();
                    p.cajaSlide["0"].style.width = (p.paginacion.length * 100) + "%";
                },
                paginacionSlide: function (item) {
                    //cambiar getAttribute("item") por getAttribute("value") 
                    p.item = item.target.parentNode.getAttribute("value") - 1;
                    m.movimientoSlide(p.item);
                },
                avanzar: function () {
                    if (p.item == p.imgSlide.length - 1) {
                        p.item = 0;
                    }
                    else {
                        p.item++;
                    }
                    m.movimientoSlide(p.item);
                },
                retroceder: function () {
                    if (p.item == 0) {
                        p.item = p.imgSlide.length - 1;
                    }
                    else {
                        p.item--;
                    }
                    m.movimientoSlide(p.item);
                },
                movimientoSlide: function (item) {
                    p.formatearLoop = true;
                    p.cajaSlide["0"].style.left = item * -100 + "%";
                    for (var i = 0; i < p.paginacion.length; i++) {
                        p.paginacion["" + i].style.opacity = .5;
                    }
                    p.paginacion["" + item].style.opacity = 1;
                    if (p.animacionSilde == "slide") {
                        p.cajaSlide["0"].style.transition = ".7s left ease-in-out";
                    }
                    if (p.animacionSilde == "fade") {
                        p.imgSlide["" + item].style.opacity = 0;
                        p.imgSlide["" + item].style.transition = ".7s opacity ease-in-out";
                        setTimeout(function () {
                            p.imgSlide["" + item].style.opacity = 1;
                        }, 500);
                    }
                },
                intervalo: function () {
                    setInterval(function () {
                        if (p.formatearLoop) {
                            p.formatearLoop = false;
                        }
                        else {
                            m.avanzar();
                        }
                    }, p.velocidadSlide);
                }
            };
            m.inicioSlide();
        }, 1000);
    };
    /*=============================================
            EDITAR SLIDE
    ===============================================*/
    SlideComponent.prototype.editarSlide = function (slide) {
        //capturar id
        this.idSlide = slide._id;
        //utilizar el modelo, asignar valor los campos
        this.itemSlides = new _modelo_slides_slides_module__WEBPACK_IMPORTED_MODULE_2__["ItemSlides"](slide.imagen, slide.titulo, slide.descripcion);
        //captuar la ruta al darnos coflicto lo quitamos
        //this.url = Ruta.url;
        this.formEditarSlide = true;
    };
    //subir archivo de imagen al servidor y validar la informacon subida, cargo una propiedad public subirImagen
    SlideComponent.prototype.cargarFichero = function (fileInput) {
        this.subirImagen = fileInput.target.files;
        //console.log("this.subirImagen", this.subirImagen);
        /*validar informacion solo suba imagenes tipo jpg y no supere el tamaño de 2 mg o 2097152 bytes tomando 1024 o png utilizando las propiedades de la consola*/
        if (this.subirImagen[0].size < 2097152 &&
            this.subirImagen[0].type == "image/jpeg" ||
            this.subirImagen[0].type == "image/png") {
            this.validarIngreso = false;
            return this.subirImagen;
        }
        else {
            //mostramos un mensaje en el formulario 
            this.validarIngreso = true;
            this.mensaje = "La extension o el peso del archivo no es valido";
            this.subirImagen = null;
            return this.subirImagen;
        }
    };
    SlideComponent.prototype.actualizarSlide = function () {
        var _this = this;
        this.url = _rutaglobal__WEBPACK_IMPORTED_MODULE_3__["Ruta"].url + "actualizarslide/" + this.idSlide;
        //la funcion actualizarItemSlide va slide.service
        this._SlideService.actualizarItemSlide(this.url, this.itemSlides, this.identificado, this.subirImagen).then(function (resultado) {
            //console.log("resultado", resultado);
            window.location.reload();
        }, function (error) {
            _this.validarIngreso = true;
            //console.log("error", error); 
            _this.mensaje = "No se puede actualizar el slide";
        });
    };
    /*=============================================
    BORRAR SLIDE FUNCION SE EJECUTA EN SLIDE.HTML
   ===============================================*/
    SlideComponent.prototype.borrarSlide = function (slide) {
        //capturar el slide
        var id = slide._id;
        // esa funcion borrarItemSlide lo creamos en slide.service
        this._SlideService.borrarItemSlide(id).subscribe(function (resultado) {
            window.location.reload();
        }, function (error) {
            console.log("error", error);
        });
    };
    SlideComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-slide',
            template: __webpack_require__(/*! ./slide.component.html */ "./src/app/slide/slide.component.html"),
            styles: [__webpack_require__(/*! ./slide.component.css */ "./src/app/slide/slide.component.css")],
            /*para cargar el servicio de nuestro componente, debemos añadir la propiedad providers, esto no permite mediante le injector de dependencas generar instancias de los objetos de los servicio*/
            providers: [_slide_service_service__WEBPACK_IMPORTED_MODULE_1__["SlideService"]]
        }),
        __metadata("design:paramtypes", [_slide_service_service__WEBPACK_IMPORTED_MODULE_1__["SlideService"]])
    ], SlideComponent);
    return SlideComponent;
}());



/***/ }),

/***/ "./src/app/usuarios-service.service.ts":
/*!*********************************************!*\
  !*** ./src/app/usuarios-service.service.ts ***!
  \*********************************************/
/*! exports provided: UsuariosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosService", function() { return UsuariosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _rutaglobal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rutaglobal */ "./src/app/rutaglobal.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { HttpClientModule } from '@angular/common/http'; 


//import { map } from 'rxjs/operators';
var UsuariosService = /** @class */ (function () {
    //vamos a api-component.ts
    function UsuariosService(_HttpClient) {
        this._HttpClient = _HttpClient;
        //this.url = "http://tutorialesatualcance.com/usuarios.json";
        //ahi colocaremos la clase ruta del archivo rutaglobal.ts con su url
        //this.url = "http://localhost:1234/api/login";
        this.url = _rutaglobal__WEBPACK_IMPORTED_MODULE_2__["Ruta"].url + "login";
    }
    //observables envia los datos de forma asincrona
    //login():Observable<any>{
    //recive el token con valor true
    UsuariosService.prototype.login = function (listaUsuarios, token) {
        listaUsuarios.token = token;
        //configurar el envio post de mi solicitud a mi api,en formato string
        var parametros = JSON.stringify(listaUsuarios);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json; charset=utf-8' });
        return this._HttpClient.post(this.url, parametros, { headers: headers });
        //return this._HttpClient.get(this.url, parametros);
    };
    UsuariosService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
        //lo importamos la clase en api.component.ts
        ,
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UsuariosService);
    return UsuariosService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\angularmongoexpress\mongodbangularexpress\apirest\projectfinal\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
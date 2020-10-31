"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
// rutas
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var header_component_1 = require("./componentes/header/header.component");
var user_component_1 = require("./componentes/user/user.component");
var footer_component_1 = require("./componentes/footer/footer.component");
var animations_1 = require("@angular/platform-browser/animations");
var button_1 = require("@angular/material/button");
var contacto_component_1 = require("./componentes/contacto/contacto.component");
var cuerpo_component_1 = require("./componentes/cuerpo/cuerpo.component");
var nosotros_component_1 = require("./componentes/nosotros/nosotros.component");
var inicio_component_1 = require("./componentes/inicio/inicio.component");
// rutas
var routes = [
    { path: 'cuerpo', component: cuerpo_component_1.CuerpoComponent },
    { path: 'nosotros', component: nosotros_component_1.NosotrosComponent },
    { path: 'contacto', component: contacto_component_1.ContactoComponent },
    { path: '', component: inicio_component_1.InicioComponent, pathMatch: 'full' },
    { path: '**', redirectTo: '/', pathMatch: 'full' },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                user_component_1.UserComponent,
                footer_component_1.FooterComponent,
                contacto_component_1.ContactoComponent,
                cuerpo_component_1.CuerpoComponent,
                nosotros_component_1.NosotrosComponent,
                inicio_component_1.InicioComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                button_1.MatButtonModule,
                router_1.RouterModule.forRoot(routes)
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

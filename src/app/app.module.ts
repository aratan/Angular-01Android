// rutas
import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';

import { ContactoComponent } from './componentes/contacto/contacto.component';
import { CuerpoComponent } from './componentes/cuerpo/cuerpo.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';

import { HttpClientModule } from '@angular/common/http';
import { ServicioTask } from './servicio/task.service';

// rutas
const routes: Routes = [
  { path: 'cuerpo', component: CuerpoComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: InicioComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactoComponent,
    CuerpoComponent,
    NosotrosComponent,
    InicioComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
  ],
  providers: [
    ServicioTask
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

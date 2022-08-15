import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { AcercaDeComponent } from './component/acerca-de/acerca-de.component';
import { HomeComponent } from './component/home/home.component';
import { AptitudesComponent } from './component/aptitudes/aptitudes.component';
import { ExperienciaYEducacionComponent } from './component/experiencia-y-educacion/experiencia-y-educacion.component';
import { IniciarSesionComponent } from './component/iniciar-sesion/iniciar-sesion.component';
import { LoginComponent } from './component/login/login.component';
import { LogrosComponent } from './component/logros/logros.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';

import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import {InterceptorService} from './service/interceptor.service';
import {GuardGuard} from './service/guard.guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDeComponent,
    HomeComponent,
    AptitudesComponent,
    ExperienciaYEducacionComponent,
    IniciarSesionComponent,
    LoginComponent,
    LogrosComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { AcercaDeComponent } from './component/acerca-de/acerca-de.component';
import { AptitudesComponent } from './component/aptitudes/aptitudes.component';
import { ExperienciaYEducacionComponent } from './component/experiencia-y-educacion/experiencia-y-educacion.component';
import { IniciarSesionComponent } from './component/iniciar-sesion/iniciar-sesion.component';
import { LogrosComponent } from './component/logros/logros.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';

import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import {InterceptorService} from './service/interceptor.service';
import {GuardGuard} from './service/guard.guard';
import { InteresButtonComponent } from './component/interes-button/interes-button.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule,BsModalRef } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
 

import { CommonModule } from '@angular/common';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { RegisterComponent } from './component/register/register.component';
import { CookieService } from 'ngx-cookie-service'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDeComponent,
    AptitudesComponent,
    ExperienciaYEducacionComponent,
    IniciarSesionComponent,
    LogrosComponent,
    PortfolioComponent,
    InteresButtonComponent,
    RegisterComponent
  ],
  imports: [
    MdbModalModule,
    FormsModule,
    ModalModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    CommonModule,
    AccordionModule.forRoot(),
    CollapseModule.forRoot(),
    TabsModule.forRoot(),
    CarouselModule.forRoot(),
    TooltipModule.forRoot() 
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true,}
  ],
  bootstrap: [AppComponent],
  entryComponents: [ InteresButtonComponent ]
})
export class AppModule { }

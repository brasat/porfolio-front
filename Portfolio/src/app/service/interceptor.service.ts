import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import {Observable} from 'rxjs'
import { AutenticacionService } from './autenticacion.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor(private autenticacionService:AutenticacionService,private ruta:Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    

    if(!req.url.includes('/registrar')){
    var currentUser=this.autenticacionService.UsuarioAutenticado;
    if(currentUser && currentUser.tokenDeAcceso){
      req=req.clone({
        setHeaders: {
          Authorization:`Bearer ${currentUser.tokenDeAcceso}`
        }
      })
    }

  }

    return next.handle(req);
  }
}

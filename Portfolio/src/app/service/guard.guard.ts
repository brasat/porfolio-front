import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AutenticacionService} from '../service/autenticacion.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(private autenticacionService:AutenticacionService,private rutas:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      let currentUser=this.autenticacionService.UsuarioAutenticado;
   if(currentUser && currentUser.tokenDeAcceso){
    return true;
   } 
   else{
    this.rutas.navigate(['/iniciar-sesion']);
    return false;
   }
  }
  
}

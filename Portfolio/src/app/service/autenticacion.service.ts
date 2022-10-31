import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject,Observable } from 'rxjs';
import { map } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  url="https://app-portfolioback.herokuapp.com/iniciar-sesion";
  currentUserSubject: BehaviorSubject<any>;

  constructor(private http: HttpClient,private rutas: Router) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'));

  }
  IniciarSesion(credenciales:any):Observable<any> {
    return this.http.post(this.url,credenciales).pipe(map(data=>{
        
      sessionStorage.setItem('currentUser',JSON.stringify(data));
      this.currentUserSubject.next(data);
      return data;
    }))

  }

  get UsuarioAutenticado(){
    return this.currentUserSubject.value;
  }

  close(){
    sessionStorage.clear();
    this.currentUserSubject= new BehaviorSubject<any>(null);
    this.rutas.navigate(['/iniciar-sesion']);
  }
}

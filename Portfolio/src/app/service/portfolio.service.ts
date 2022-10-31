import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import {Secction} from '../service/seccions.service';
import { FormGroup } from '@angular/forms';

const httpOptions = {
  headers:new HttpHeaders({
    'content-type': 'application/json'

  })
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  form:FormGroup;
  username:string;

  
private BaseURL ="https://app-portfolioback.herokuapp.com"

  constructor(private http: HttpClient) { }

  RecibirNombre(name:string){
    this.username = name;
    localStorage.setItem("nombre", this.username);
  }

  ObtenerPersonas():Observable<any> {
   if(!this.username){
    this.username =  localStorage.getItem('nombre') || '{}';
   }
    return this.http.get<any>(`${this.BaseURL}/ver/`+this.username);
  }
  
  ObtenerEscuelas(scho:any):Observable<any> {
    return this.http.get<any>(`${this.BaseURL}/school/ver/`+scho);
  }
  

  ObtenerCompanias(comp:any):Observable<any> {
    return this.http.get<any>(`${this.BaseURL}/company/ver/`+comp);
  }

  ObtenerArchive(comp:any):Observable<any> {
    return this.http.get<any>(`${this.BaseURL}/archive/ver/`+comp);
  }


  ObtenerEducation(comp:any):Observable<any> {
    return this.http.get<any>(`${this.BaseURL}/education/ver/`+comp);
  }


  ObtenerExperience(comp:any):Observable<any> {
    return this.http.get<any>(`${this.BaseURL}/experience/ver/`+comp);
  }

  ObtenerLogs(comp:any):Observable<any> {
    return this.http.get<any>(`${this.BaseURL}/aptitude/ver/`+comp);
  }

  ObtenerInteres(comp:any):Observable<any> {
    return this.http.get<any>(`${this.BaseURL}/interes/ver/`+comp);
  }

  agregarUsuario(comp:any):Observable<any> {
    return this.http.post<any>(`${this.BaseURL}/agregar`,comp);
  }
  

  
}

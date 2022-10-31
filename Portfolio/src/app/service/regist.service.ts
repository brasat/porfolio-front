import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistService {
  url="https://app-portfolioback.herokuapp.com/registrar"
 
  constructor(private http: HttpClient) { }


  registrarUsuario(credenciales:any):Observable<any> {
    return this.http.post(this.url,credenciales).pipe(map(data=>{
      
      return data;
    }))
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { AutenticacionService } from 'src/app/service/autenticacion.service';
import {Router} from '@angular/router';
import {PortfolioService} from 'src/app/service/portfolio.service'
import { Persona } from 'src/app/persona';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  form:FormGroup;

  constructor(private datosPortfolio:PortfolioService,private formBuilder: FormBuilder, private autenticacionService:AutenticacionService,private ruta:Router,private http: HttpClient) { 
    this.form=this.formBuilder.group(
      {
      usernameOrEmail:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]],
      }
    )
  }

  ngOnInit(): void {
  }

  get Email(){
    return this.form.get('usernameOrEmail');
  }

  get Password(){
    return this.form.get('password');
  }

  onEnviar(event:Event){
    this.onPreserbar();

    this.autenticacionService.IniciarSesion(this.form.value).subscribe(data=>{
      this.ruta.navigate(['/portfolio']);
    })
  }

  onPreserbar(){
    this.datosPortfolio.RecibirNombre(this.form.get('usernameOrEmail')?.value);
  }
  
  regist(){
    this.ruta.navigate(['/registrar']);
  }
}

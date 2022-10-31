import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistService } from 'src/app/service/regist.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  form:FormGroup;
  constructor(private formBuilder: FormBuilder, private registracionService:RegistService,private ruta:Router) { 
    this.form=this.formBuilder.group(
      {
      nombre:['',[Validators.required]],
      apellido:['',[Validators.required]],
      username:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]],
      }
    )
  }

  ngOnInit(): void {
  }

  get Email(){
    return this.form.get('email');
  }

  get Password(){
    return this.form.get('password');
  }

  onRegist(event:Event){
    event.preventDefault;

    if(this.form.valid){
  
      this.registracionService.registrarUsuario(this.form.value).subscribe(data=>{
           
        alert(data.status);
          this.ruta.navigate(['/iniciar-sesion']);

      })  
    } 

  }
     
}
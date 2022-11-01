import { Component, Input, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { Observable } from 'rxjs';
import {Secction} from 'src/app/service/seccions.service';
import { Persona } from 'src/app/persona';
import { RegistService } from 'src/app/service/regist.service';



@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  about:any;


  


  editmode = false;
  editText = '';

  user:any;
  constructor(private datosPortfolio:PortfolioService,private registracionService:RegistService) { }
  



  ngOnInit(): void {
    this.datosPortfolio.ObtenerPersonas().subscribe(data => {
      this.about = data.about;
    });
  }



  
  edit() {
    this.editmode = true;
    this.editText = this.about;
  }



  save() {
    this.editmode = false;
    this.about= this.editText;

    this.datosPortfolio.ObtenerPersonas().subscribe(data => {
      this.user = data;
      this.user.about=this.about;

      this.datosPortfolio.agregarUsuario(this.user).subscribe(data2 => {

      });
      
    });

    



  }

  cancel() {
    this.editmode = false;
    this.editText = '';
  }
}

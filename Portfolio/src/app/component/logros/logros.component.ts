import { Component, OnInit } from '@angular/core';
import { Archive } from 'src/app/archive';
import {PortfolioService} from 'src/app/service/portfolio.service';

@Component({
  selector: 'app-logros',
  templateUrl: './logros.component.html',
  styleUrls: ['./logros.component.css']
})
export class LogrosComponent implements OnInit {
  logrosList:any[]=[];

  array:any;

  isCollapsed = true;
  editmode = false;
  editText:String = '';
  editvalue:String = '';


  log:any;
  notes:any[]=[];
  logContent:any[];
  editAux:String= '';

  auxPerson:any;

  editval=false;

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
 
    this.portfolioService.ObtenerPersonas().subscribe(header_value => {
      this.auxPerson = header_value;
      this.logContent = header_value.aptitudes;
      
    });


  }


  edit() {
    this.editmode = true;
  }



  editValue(logro:any){
    this.editval=true;
    this.editmode = false;
    
    this.editvalue=logro;
    this.editAux=logro;
  }

  save() {
   this.editmode = false; 
   this.editval=false;
    
    const index = this.logContent.indexOf(this.editAux);
    this.logContent[index] = this.editvalue;
 
    this.save_new();
    
  }


  save_new(){

    this.isCollapsed=true;

   

    this.portfolioService.ObtenerPersonas().subscribe(header_value => {
      this.auxPerson = header_value;
    });

    this.logrosList=this.logContent;


    if(this.editText != ''){
    this.logrosList.push(this.editText);
    this.editText = '';
    }

    
    this.auxPerson.aptitudes = this.logrosList;

    this.portfolioService.agregarUsuario(this.auxPerson).subscribe(data2 => {

    });
    this.editmode = false;
  }

  cancel() {
    this.editval=false;
    this.editmode = false;
    this.editText = '';
  }

  scrollToElement($element:any): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  deletelog(logro:any){
    const index = this.logContent.indexOf(logro);
    const x = this.logContent.splice(index, 1);

  }



}

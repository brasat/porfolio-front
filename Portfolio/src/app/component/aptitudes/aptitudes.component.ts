import { Component, Input, OnInit } from '@angular/core';
import{ PortfolioService} from 'src/app/service/portfolio.service';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ThisReceiver } from '@angular/compiler';
import { Archive } from 'src/app/archive';

@Component({
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html',
  styleUrls: ['./aptitudes.component.css']
})
export class AptitudesComponent implements OnInit {
  aptitudesList:any;
  confirmsList:any;
  @Input() 
  text: any ;
  form!: FormGroup;
  editmode = false;
  editText:string = "";
  edit_confirm:any;

  isCollapsed = true;

  myMap = new Map<string, string>();
  ConfirmText = "";
  archive:any;
 
 editval=false;
  
  editvalue:any;
  editAux:any;

  editvalue2 = "";
  aux:Archive;
  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    
    this.portfolioService.ObtenerPersonas().subscribe(header_value => {
      this.archive = header_value.archivemnents; 
    });


    this.myMap.set( "Resolucion de Problemas","Nikkolai Emmanuel Bayro y Juanito Dias");
    this.myMap.set("Diseño de Sistemas","Nikkolai Tesla , Martin Fierro y Agustin Teves");
 /*    for(let arch of this.archive){
      this.portfolioService.ObtenerArchive(arch).subscribe(datos =>{
        this.archiveContent.push(datos);
      });
    } */

    
    this.form = new FormGroup({
      passenger: new FormArray([
        new FormGroup({
          name: new FormControl(''),
        })
      ])
    });
  }

save_new(){

  
  this.isCollapsed=true;


  if(this.editText != ""){

  this.myMap.set(this.editText,this.ConfirmText);

  }


}

  edit() {
    this.editmode = true;
  }



  save() {
    this.editval = false;
    this.editmode = false;
 


    if(this.editvalue != ""){

      if(this.editvalue != this.editAux){
        this.deletelog(this.editAux);
        this.editAux=this.editvalue;
      }
      this.myMap.set(this.editvalue,this.editvalue2);
      }

  }

  cancel() {
    this.editval = false;
    this.editmode = false;
    this.editText = '';
  }

  
  scrollToElement($element:any): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block:"center", inline: "nearest"});
  }

  get passenger(): FormArray {
    return this.form.get('passenger') as FormArray;
  }

  addPassenger() {
    this.passenger.push(
      new FormGroup({
        name: new FormControl(''),
        address: new FormControl(''),
        number: new FormControl(''),
        email: new FormControl('')
      })
    );
  }

  editValue(aptitude:any){
    this.editval=true;
 
    
    this.editvalue=aptitude;
    this.editAux=aptitude;
  }

  deletelog(aptitude:any){
    let isDeleted = this.myMap.delete(aptitude);
  }

}

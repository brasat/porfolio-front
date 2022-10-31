import { Component, Input, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/service/portfolio.service';

@Component({
  selector: 'app-experiencia-y-educacion',
  templateUrl: './experiencia-y-educacion.component.html',
  styleUrls: ['./experiencia-y-educacion.component.css']
})
export class ExperienciaYEducacionComponent implements OnInit {
  experienceList:any;
  educacionList:any;
  @Input() 
  editmode = false;
  editmode2 = false;
  editText_exp = '';
  editText_edu = '';
  isCollapsed = true;
  isCollapsed2 = true;

  editvalue0="";
  editvalue1="";
  editvalue2="";
  editvalue3="";


  editvalue4="";
  editvalue5="";
  editvalue6="";
  editvalue7="";

  education:any;

  educationContent:any[];

  experience:any;

  experienceContent:any[];
  editval=false;
  editval2=false;
myMapEdu = new Map<string, string[]>();

editInstitucion:string ="";
editCarrera:string = "";
editJornada:string = "";
imagenExp:string = "";


myMapExp = new Map<string, string[]>();



editExperiencia:string ="";
editCompania:string = "";
editJornadaexp:string = "";
imagenEdu:string = "";

editAux="";

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {

    this.myMapExp.set("https://cdn.pixabay.com/photo/2015/09/17/17/25/code-944499_960_720.jpg",
      ["Bakend Development","pixar", "Jornada Parcial"]);


  this.myMapEdu.set( "data:image/jpeg;base64,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",
    ["Centro de Enseñanza Técnica Industrial","Tecnologia,Desarrollo de Software", "2014 - 2018"]);
    
    this.myMapEdu.set("https://seeklogo.com/images/S/secundarias-tecnicas-logo-1F0F273E45-seeklogo.com.png",
      ["Escuela Secundaria Técnica","Electronica,comunicacion y sistemas de control", "2012 - 2014"]);
    
 


/*     this.datosPortfolio.ObtenerPersonas().subscribe(header_value => {
      this.education = header_value.education;
      this.experience = header_value.experience;
    }); */



/*     for(let edu of this.education){
    this.datosPortfolio.ObtenerEducation(edu).subscribe(education_value => {
      this.educationContent = education_value;
    });
    }

    for(let exp of this.experience){
    this.datosPortfolio.ObtenerExperience(exp).subscribe(experience_value => {
      this.experienceContent = experience_value;
    });
  } */



  }

  edit_experience() {
    this.editmode = true;

    
  }
  edit_education() {
    this.editmode2 = true;
 
    
  }


  editValue(key:any){
    this.editval =true;

    this.editvalue0=key;
    
    this.imagenExp=key;
    this.editAux=key;
  }

editValueEd(key:any){
  this.editval2=true;
  this.editvalue4=key;
  this.imagenEdu=key;
  this.editAux=key;
}

  deleteExp(key:any){
    let isDeleted = this.myMapExp.delete(key);
  }

  deleteEd(key:any){
    let isDeleted = this.myMapEdu.delete(key);
  }


  save_experience() {

    this.editmode = false;
    this.editval =false;
    
    
    if(this.editvalue1 != ""){

      if(this.editvalue0 != this.editAux){
        this.deleteExp(this.editAux);
        this.editAux=this.editvalue0;
      }
    this.myMapExp.set(this.editvalue0,[this.editvalue1,this.editvalue2, this.editvalue3]);


    }
    
  }

  save_e(){

    this.isCollapsed= true;

     if(this.editExperiencia != ""){
    this.myMapExp.set(this.imagenExp,[this.editExperiencia,this.editCompania, this.editJornadaexp]);}
      

    this.editExperiencia = "";
    this.editCompania = "";
    this.editJornadaexp = "";
  }

  
  save_edu(){
    this.editval2=false;
    this.isCollapsed2= true;
    if(this.editInstitucion != ""){
   this.myMapEdu.set(this.imagenEdu,[this.editInstitucion,this.editCarrera, this.editJornada]);}

 this.imagenEdu="";
   this.editInstitucion = "";
   this.editCarrera = "";
   this.editJornada = "";
 }

  save_education() {
    this.editval2=false;
    this.editmode2 = false;
    this.educacionList= this.editText_edu  ;


  if(this.editvalue4 != ""){

  if(this.editvalue4 != this.editAux){
        this.deleteEd(this.editAux);
        this.editAux=this.editvalue4;
      }
    this.myMapEdu.set(this.editvalue4,[this.editvalue5,this.editvalue6, this.editvalue7]);

    }

    this.editvalue4="";
    this.editvalue5 = "";
    this.editvalue6 = "";
    this.editvalue7 = "";
  }

  cancel_experience() {
    this.editval=false;
    this.editmode = false;
    this.editText_exp = '';
  }

  cancel_education() {
    this.editval2=false;
    this.editmode2 = false;
    this.editText_edu = '';
  }

  scrollToElement($element:any): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block:"center", inline: "nearest"});
  }
}

import { Component, EventEmitter, OnInit,Output,TemplateRef  } from '@angular/core';
import {PortfolioService} from 'src/app/service/portfolio.service';
import { Secction } from 'src/app/service/seccions.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Persona } from 'src/app/persona';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  persona:Persona[];

  slides: { image: string; text: string }[] = [
    {image:"https://cdn.pixabay.com/photo/2016/11/14/03/38/achieve-1822503_960_720.jpg",text:"Deporte"},
    {image:"https://cdn.pixabay.com/photo/2015/11/22/19/04/crowd-1056764_960_720.jpg",text:"Conciertos"},
    {image:"https://cdn.pixabay.com/photo/2015/05/07/11/02/guitar-756326_960_720.jpg",text:"Tocar la guitarra"}
  ];

  activeSlideIndex = 0;
  modalRef?: BsModalRef;
  @Output() onSeccion = new EventEmitter();
  myPortfolio:any;
  s_nuevo:any;
  display='none';
  display2='none';
  newSection:any;
  text: string ="";
  body:string="";

  isCollapsed = true;
  isCollapsed2 = true;

  s_titulo:string="";
  s_cuerpo:string="";

  editmode = false;
  editName:any ='';
  editPosition:any ='';
  editUbication:any ='';
  editTelefono:any ='';
  editCorreo:any ='';
  url:any="https://www.w3schools.com/howto/img_avatar.png";
 
  urlBack:any="https://images.pexels.com/photos/1029622/pexels-photo-1029622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  schools:any;
  companies:any;

  schoolContent:any[];
  companyContent:any[];


  interes:any;
  interesContent:any[];
  user: any;
  editApellido: any='';

  
  editslide = false;
 
  editSlideImg:string = "";
  editSlideText:string = "";

 

  constructor(private datosPortfolio:PortfolioService,private modalService: BsModalService) {

    for (let i = 0; i < 3; i++) {
      this.addSlide();

     
      if(this.editSlideImg != ""){
      this.editSlideImg =  this.slides[i].image;
      this.editSlideText =  this.slides[i].text;


      this.slides.push({
        text: this.editSlideText,
        image: this.editSlideImg
      });

      }


      this.editSlideImg = "";
      this.editSlideText = "";
    }
   }
  ngOnInit(): void {
    this.editslide=false;
    this.datosPortfolio.ObtenerPersonas().subscribe(header_value => {
      this.myPortfolio = header_value;
    });


    for(let scho of this.schools){

      this.datosPortfolio.ObtenerEscuelas(scho).subscribe(data => {
        this.schoolContent.push(scho);
      })
      
    }



    for(let compa of this.companies){

      this.datosPortfolio.ObtenerCompanias(compa).subscribe(data => {
        this.companyContent.push(compa);
      })
      
    }


    for(let inter of this.interesContent){

      this.datosPortfolio.ObtenerInteres(inter).subscribe(data => {
        this.interesContent.push(inter);
      })
      
    }

  }

 
 

 valor:boolean=true;
  agregar():void{
    this.newSection.title=this.text;
    this.newSection.body=this.body;
  }


  edit() {
    this.editmode = true;
  }



  save() {
    this.editmode = false;

    if(this.editName != '')this.myPortfolio.nombre= this.editName;
    

    if(this.editApellido != '')this.myPortfolio.apellido = this.editApellido;

    if(this.editPosition != '')this.myPortfolio.position= this.editPosition;

    if(this.editUbication != '')this.myPortfolio.ubication= this.editUbication;

    if(this.editTelefono != '')this.myPortfolio.telefono = this.editTelefono;
    
    if(this.editCorreo != '')this.myPortfolio.correo = this.editCorreo;

    this.datosPortfolio.agregarUsuario(this.myPortfolio).subscribe(data2 => {

    });




  }

  cancel() {
    this.editmode = false; 
    this.editName = '';
    this.editPosition = '';
    this.editUbication = '';
  }
 
  openModal(){
    this.display='block';
  }
  onCloseHandled(){
    this.display='none';
  }   

  openModal2(){
    this.display2='block';
  }
  onCloseHandled2(){
    this.display2='none';
  }   

  addSlide(): void {

    this.editslide =! this.editslide ;

    if( this.editSlideImg != "" && this.editSlideText != ""){

      this.slides.push({
        text: this.editSlideText,
        image: this.editSlideImg
      });

      this.editSlideImg  = "";
      this.editSlideText  = "";
    }
  }
 
  removeSlide(index?: number): void {
    const toRemove = index ? index : this.activeSlideIndex;
    this.slides.splice(toRemove, 1);
  }


  onSelectFile(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); 

      reader.onload = (event) => { 
        this.url = event.target?.result;
      }
    }
  }
  public delete(){
    this.url = "null";
  }


}

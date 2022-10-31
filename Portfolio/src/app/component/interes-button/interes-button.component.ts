
import { Component, TemplateRef ,OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AutenticacionService } from 'src/app/service/autenticacion.service';

@Component({
  selector: 'app-interes-button',
  templateUrl: './interes-button.component.html',
  styleUrls: ['./interes-button.component.css']
})
export class InteresButtonComponent implements OnInit {
  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService,private autenticacionService:AutenticacionService) {}

  ngOnInit() {
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


  closeSession(){
    this.autenticacionService.close();
  }

}
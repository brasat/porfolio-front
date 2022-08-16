import { Component, OnInit } from '@angular/core';
import {PortfolioService} from 'src/app/service/portfolio.service';

@Component({
  selector: 'app-logros',
  templateUrl: './logros.component.html',
  styleUrls: ['./logros.component.css']
})
export class LogrosComponent implements OnInit {
  logrosList:any;
  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.ObtenerDatos().subscribe(datos =>{
      this.logrosList=datos.archivemnents;
    });
  }
}

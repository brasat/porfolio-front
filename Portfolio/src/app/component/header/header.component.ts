import { Component, OnInit } from '@angular/core';
import {PortfolioService} from 'src/app/service/portfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  myPortfolio:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.ObtenerDatos().subscribe(data => {
      this.myPortfolio = data;
    });
  }

}

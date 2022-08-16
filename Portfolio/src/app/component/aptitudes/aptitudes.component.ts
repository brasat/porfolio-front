import { Component, OnInit } from '@angular/core';
import{ PortfolioService} from 'src/app/service/portfolio.service';
@Component({
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html',
  styleUrls: ['./aptitudes.component.css']
})
export class AptitudesComponent implements OnInit {
  aptitudesList:any;
  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.ObtenerDatos().subscribe(data => {
      this.aptitudesList = data.aptitudes;
    })
  }

}

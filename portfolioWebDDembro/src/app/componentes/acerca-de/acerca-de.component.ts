import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent {
  
  acerca:any;

  constructor(private datos:PortfolioService){}

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data=>{

      this.acerca = data.acercaDe;
    });
  }

}
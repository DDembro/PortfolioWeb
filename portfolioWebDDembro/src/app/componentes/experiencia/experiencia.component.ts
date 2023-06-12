import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
  exp:any;

  constructor(private datos:PortfolioService){}

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data=>{

      this.exp = data.experiencia;
    });
  }
}

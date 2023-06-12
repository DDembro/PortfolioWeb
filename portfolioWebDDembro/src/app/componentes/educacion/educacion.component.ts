import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {
  edu:any;

  constructor(private datos:PortfolioService){}

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data=>{

      this.edu = data.educacion;
    });
  }
}
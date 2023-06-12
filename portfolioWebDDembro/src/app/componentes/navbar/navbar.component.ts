import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent{
  navbar:any;

  constructor(private datos:PortfolioService){}

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data=>{

      this.navbar = data.datosNavbar;
    });
  }
}

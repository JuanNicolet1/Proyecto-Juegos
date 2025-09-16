import { Component, OnInit } from '@angular/core';
import { NavRegistroLogin } from '../../Componentes/nav-registro-login/nav-registro-login';

@Component({
  selector: 'app-acceso-rapido',
  imports: [NavRegistroLogin],
  templateUrl: './acceso-rapido.html',
  styleUrls: ['./acceso-rapido.css']
})
export class AccesoRapido implements OnInit {
  cuentas: string[] = [];

  ngOnInit(): void {
    const guardadas = localStorage.getItem('cuentas');
    
    if(guardadas){
      this.cuentas = JSON.parse(guardadas);
    } else {
      this.cuentas = [];
    }
  }
}


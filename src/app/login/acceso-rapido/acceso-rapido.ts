import { Component, OnInit, inject } from '@angular/core';
import { NavRegistroLogin } from '../../Componentes/nav-registro-login/nav-registro-login';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-acceso-rapido',
  imports: [NavRegistroLogin],
  templateUrl: './acceso-rapido.html',
  styleUrls: ['./acceso-rapido.css']
})
export class AccesoRapido implements OnInit {
  cuentas: string[] = [];
  private authService = inject(AuthService);
  private router = inject(Router);

  ngOnInit(): void {
    const guardadas = localStorage.getItem('cuentas');
    
    if(guardadas){
      this.cuentas = JSON.parse(guardadas);
    } else {
      this.cuentas = [];
    }
  }

  iniciarSesion(cuenta: string): void {
    this.authService.loginRapido(cuenta);
    this.router.navigate(['/bienvenida/home']);
  }
}


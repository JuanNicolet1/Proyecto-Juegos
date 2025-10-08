import { Component, inject } from '@angular/core';
import { NavRegistroLogin } from '../../Componentes/nav-registro-login/nav-registro-login';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NavRol } from '../../Componentes/nav/nav-rol/nav-rol';

interface ListaRoles {
  label: string;
  email: string;
  rol: string;
}

@Component({
  selector: 'app-acceso-rapido-roles',
  imports: [NavRegistroLogin],
  templateUrl: './acceso-rapido-roles.html',
  styleUrl: './acceso-rapido-roles.css'
})
export class AccesoRapidoRoles {

  constructor(private navService: NavRol){}
  private authService = inject(AuthService);
  private router = inject(Router);
  usuarios: ListaRoles[] = [
    {label: "admin", email: "admin@adim.com", rol: "admin"},
    {label: "usuario", email: "usuario@usuario.com", rol: "usuario"},
    {label: "invitado", email: "invitado@invitado.com", rol: "invitado"}
  ]

  iniciarSesion(cuenta: ListaRoles): void {

     this.authService.loginRol(cuenta.rol); 

     this.navService.datosNavRol(cuenta.rol, cuenta.email);

     this.router.navigate(['/bienvenida/home']);
  }
}

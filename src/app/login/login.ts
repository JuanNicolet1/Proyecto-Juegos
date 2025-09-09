import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavRegistroLogin } from '../Componentes/nav-registro-login/nav-registro-login';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NavRegistroLogin],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  email = '';
  password = '';
  loading = true;

  constructor(private router: Router) {}

  login() {
    const usuarioGuardado = localStorage.getItem('usuario');

    if (!usuarioGuardado) {
      alert('No hay usuarios registrados');
      return;
    }

    const usuario = JSON.parse(usuarioGuardado);

    if (usuario.email === this.email && usuario.password === this.password) {
      this.router.navigate(['/bienvenida/home']);
      this.loading = true;
    } else {
      this.loading = false;
    }
  }
}


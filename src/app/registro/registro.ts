import { Component, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NavRegistroLogin } from '../Componentes/nav-registro-login/nav-registro-login';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule, NavRegistroLogin],
  templateUrl: './registro.html',
  styleUrls: ['./registro.css']
})
export class Registro {
  nombre = '';
  email = '';
  password = '';
  loading: boolean = true;
  constructor(private router: Router, private cdr: ChangeDetectorRef) {}
  register() {
    if(this.nombre || this.email || this.password){
      localStorage.setItem(
        'usuario',
        JSON.stringify({
          nombre: this.nombre,
          email: this.email,
          password: this.password
        })
      )
      this.loading = true;
      this.router.navigate(['/bienvenida/home']);
    } else {
      this.loading = false;
      this.cdr.detectChanges();
    }
  }
}
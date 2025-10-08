import { Component, ChangeDetectorRef } from '@angular/core';
import { SupabaseService } from '../services/supabase';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NavRegistroLogin } from '../Componentes/nav-registro-login/nav-registro-login';
import { NavEmail } from '../Componentes/nav/nav-email/nav-email';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule, NavRegistroLogin],
  templateUrl: './registro.html',
  styleUrls: ['./registro.css']
})
export class Registro {
  nombre = '';
  apellido = '';
  edad: number = 0;
  email = '';
  password = '';
  errorMessage = '';
  errorMessageEmail = '';
  errorMessageConstrasena = '';
  errorMessageNombre = '';
  errorMessageEdad = '';
  mensajeExito = '';
  cuentas: string[] = [];
  loading: boolean = true;
  loadingExito: boolean = false;
  
  constructor(private router: Router, private supabase: SupabaseService, private navService: NavEmail, private cdr: ChangeDetectorRef, private auth: AuthService) {}
  async register() {
    if(!this.email){
      this.errorMessageEmail = "Escribe el Email";
    } 

    if(!this.password){
      this.errorMessageConstrasena = "Escribe la contraseña";
    }

    if(!this.nombre){
      this.errorMessageNombre = "Escribe el nombre";
    }

    if(!this.edad){
      this.errorMessageEdad = "Escribe la edad";
    }

    try{
        await this.supabase.signUp(this.email, this.password, this.nombre, this.apellido, this.edad);  
        this.loading = true;
        this.loadingExito = true;
        console.log("gg");
        this.navService.datosNav(this.nombre, this.apellido, this.email);
        this.auth.descubrirEdad(this.edad);
        this.mensajeExito = "Confirma tu cuenta en el link que te enviamos al mail";
        this.cdr.detectChanges();
        let cuentasGuardadas = JSON.parse(localStorage.getItem('cuentas') || '[]');
        if (!cuentasGuardadas.includes(this.email)) {
            cuentasGuardadas.push(this.email);
            localStorage.setItem('cuentas', JSON.stringify(cuentasGuardadas));
            this.cdr.detectChanges();
          } else {
            this.errorMessage = "Esa cuenta ya está registrada";
            this.cdr.detectChanges();
          }
      } catch{
        this.loading = false;
        this.errorMessage = "Email inexistente o ya registrado";
        this.cdr.detectChanges();
    }
  }
}
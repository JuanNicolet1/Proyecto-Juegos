import { Component, ChangeDetectorRef } from '@angular/core';
import { SupabaseService } from '../services/supabase';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NavRegistroLogin } from '../Componentes/nav-registro-login/nav-registro-login';
import { NavEmail } from '../Componentes/nav/nav-email/nav-email';

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
  mensajeExito = '';
  cuentas: string[] = [];
  loading: boolean = true;
  loadingExito: boolean = false;
  
  constructor(private router: Router, private supabase: SupabaseService, private navService: NavEmail, private cdr: ChangeDetectorRef) {}
  async register() {
    if(!this.email && !this.password){
      this.errorMessage = "Escribe el Email y la contraseña";
    } 
    else if(!this.email){
      this.errorMessage = "Escribe el Email";
    } 
    else{
      this.errorMessage = "Escribe la contraseña";
    }

    try{
        await this.supabase.signUp(this.email, this.password);  
        this.loading = true;
        this.loadingExito = true;
        console.log("gg");
        this.navService.datosNav(this.email);
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
        this.cdr.detectChanges();
    }
  }
}
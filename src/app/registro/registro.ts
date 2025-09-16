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
  cuentas: string[] = [];
  loading: boolean = true;
  
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
        let cuentasGuardadas = JSON.parse(localStorage.getItem('cuentas') || '[]');
        if (!cuentasGuardadas.includes(this.email)) {
            await this.supabase.signUp(this.email, this.password);  
            this.loading = true;
            this.navService.datosNav(this.email);
            cuentasGuardadas.push(this.email);
            this.router.navigate(['/bienvenida/home']);
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
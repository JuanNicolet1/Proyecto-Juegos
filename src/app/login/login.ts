import { Component, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SupabaseService } from '../services/supabase';
import { NavRegistroLogin } from '../Componentes/nav-registro-login/nav-registro-login';
import { error } from 'console';
import { NavEmail } from '../Componentes/nav/nav-email/nav-email';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, NavRegistroLogin],
  templateUrl: './login.html',
  styleUrl: './login.css'
})

export class Login {
  email = '';
  password = '';
  errorMessage = '';
  loading: boolean = true;

  constructor(private supabase: SupabaseService, private navService: NavEmail , private router: Router, private cdr: ChangeDetectorRef) {}

  async logIn() {
    if(!this.email && !this.password){
      this.errorMessage = "Escribe el Email y la contraseña";
    } 
    else if(!this.email){
      this.errorMessage = "Escribe el Email";
    } 
    else{
      this.errorMessage = "Escribe la contraseña";
    }

    try {
      const { user, session } = await this.supabase.logIn(this.email, this.password)
      if(user){
        this.loading = true;
        this.navService.datosNav(this.email);
        this.router.navigate(['/bienvenida/home']);
        this.cdr.detectChanges();
      }
    } catch (e: any) {
      this.loading = false;
      this.cdr.detectChanges();
    }
  }
}


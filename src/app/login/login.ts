import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SupabaseService } from '../services/supabase';
import { AuthService } from '../services/auth.service';
import { NavRegistroLogin } from '../Componentes/nav-registro-login/nav-registro-login';
import { NavEmail } from '../Componentes/nav/nav-email/nav-email';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, NavRegistroLogin],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  email = '';
  password = '';
  errorMessage = '';
  loading = false;

  constructor(
    private supabase: SupabaseService,
    private authService: AuthService,
    private navService: NavEmail,
    private router: Router
  ) {}

  async logIn() {
    this.errorMessage = '';
    this.loading = true;

    if (!this.email && !this.password) {
      this.errorMessage = 'Escribe el email y la contraseña';
      this.loading = false;
      return;
    } else if (!this.email) {
      this.errorMessage = 'Escribe el email';
      this.loading = false;
      return;
    } else if (!this.password) {
      this.errorMessage = 'Escribe la contraseña';
      this.loading = false;
      return;
    }

    try {
      const { user, session } = await this.supabase.logIn(this.email, this.password);
      this.authService.login(this.email, this.password);
      this.navService.datosNav(this.email);
      await this.router.navigate(['/bienvenida/home']);
      this.loading = false;
    } catch (e: any) {
      this.errorMessage = e.message || 'Error al iniciar sesión';
      this.loading = false;
    }
  }
}
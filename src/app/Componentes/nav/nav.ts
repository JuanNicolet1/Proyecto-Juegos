import { Component, ChangeDetectorRef } from '@angular/core';
import { NavEmail } from './nav-email/nav-email';
import { RouterLink } from '@angular/router';
import { SupabaseService } from '../../services/supabase';

@Component({
  selector: 'app-nav',
  imports: [RouterLink],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {
  constructor(public navService: NavEmail, private supabase: SupabaseService, private cdr: ChangeDetectorRef) {
  }

 
  logOut: boolean = false;
  async ngOnInit() {
  
    const user = await this.supabase.getUser();

    if (user) {
   
      const nombreUsuario = user.user_metadata?.['nombre'] || user.email;
      const nombreApellido = user.user_metadata?.['apellido'] || user.email;
      const emailUsuario = user.email || '';
      
  
      this.navService.datosNav(nombreUsuario, nombreApellido, emailUsuario);
      
   
      this.cdr.detectChanges();
    }
  }
  async logout() {
    try {
      await this.supabase.signOut();
      this.logOut = true;
      this.cdr.detectChanges();
    } catch {
      this.logOut = false;
    }
  }
}

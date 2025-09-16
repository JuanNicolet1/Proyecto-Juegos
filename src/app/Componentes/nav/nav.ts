import { Component, ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavEmail } from './nav-email/nav-email';
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

  email = '';
  password = '';
  logOut: boolean = false;

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

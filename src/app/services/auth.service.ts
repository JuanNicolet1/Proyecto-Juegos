import { computed, Injectable, signal } from '@angular/core';
import { SupabaseService } from './supabase'; // ruta correcta
import { User, Session, AuthChangeEvent } from '@supabase/supabase-js';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private loggedIn = signal(false);
  private user = signal<{name: string} | null>(null);

  isAuthenticated = computed(() => this.loggedIn());
  username = computed(() => this.user()?.name ?? 'Invitado');

  constructor(private supabase: SupabaseService) {
    this.supabase.getUser().then((user: User | null) => {
      if(user){
        this.loggedIn.set(true);
        this.user.set({ name: user.email! });
      }
    });

    this.supabase.onAuthStateChange((event: AuthChangeEvent, session: Session | null) => {
      if(session?.user){
        this.loggedIn.set(true);
        this.user.set({ name: session.user.email! });
      } else {
        this.loggedIn.set(false);
        this.user.set(null);
      }
    });
  }

  login(username: string, password: string) {
    if(username && password){
      this.loggedIn.set(true);
      this.user.set({ name: username });
    }
  }

  loginRapido(username: string) {
        this.loggedIn.set(true);
        this.user.set({ name: username });
        localStorage.setItem("currentUser", username);
    }

  logout() {
    this.loggedIn.set(false);
    this.user.set(null);
  }
}

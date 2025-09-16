import { Injectable } from "@angular/core";
import { AuthChangeEvent, createClient, SupabaseClient, User, Session } from "@supabase/supabase-js";
import { environment } from "../../environments/environments";

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor(){
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey)
  }

  async signUp(email: string, password: string){
    const { data, error } = await this.supabase.auth.signUp({email, password});
    if (error) throw error;
    return data;
  }

  async logIn(email: string, password: string): Promise<{user: User | null; session: Session | null }> {
    const { data, error } = await this.supabase.auth.signInWithPassword({email, password});
    if (error) throw error;
    return data;
  }
  
  async signOut() {
    const { error } = await this.supabase.auth.signOut();
    if (error) throw error;
  }

  async getUser(): Promise<User | null> {
    const { data } = await this.supabase.auth.getUser();
    return data.user;
  }

  onAuthStateChange(callback: (event: AuthChangeEvent, session: Session | null) => void){
    return this.supabase.auth.onAuthStateChange(callback);
  }
} 

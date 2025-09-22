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

  async guardarPartida(usuario: string, puntaje: number, rondasPerdidas: number, rondasGanadas: number) {
    const { data, error } = await this.supabase
      .from('partidas')
      .insert([
        { usuario, puntaje, rondas_perdidas: rondasPerdidas, rondas_ganadas: rondasGanadas }
      ]);

    if (error) {
      console.error('Error guardando partida:', error.message);
      throw error;
    }
    return data;
  }

  async guardarPartidaAhorcado(usuario: string, letras_usadas: number, palabra_acertada: string) {
    const { data, error } = await this.supabase
      .from('partidasahorcado')
      .insert([
        { usuario, letras_usadas, palabra_acertada }
      ]);

    if (error) {
      console.error('Error guardando partida:', error.message);
      throw error;
    }
    return data;
  }

  async enviarMensaje(mensaje: string) {
  const usuario = (await this.supabase.auth.getUser()).data.user?.email ?? 'Anónimo';

  return await this.supabase
    .from('chat')
    .insert([{ usuario, mensaje, fecha: new Date() }]);
}

  async getMensajes() {
    const { data, error } = await this.supabase
      .from('chat')
      .select('*')
      .order('fecha', { ascending: true });
    if (error) throw error;
    return data;
  }

  suscribirseMensajes(callback: (payload: any) => void) {
    return this.supabase
      .channel('chat-room')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'chat' },
        (payload) => callback(payload)
      )
      .subscribe();
  }
} 

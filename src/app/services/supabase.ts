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

  async signUp(email: string, password: string, nombre: string, apellido: string, edad: number){
    const { data, error } = await this.supabase.auth.signUp({email, password,
      options: { data: { nombre, apellido, edad }}
    });
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

  async guardarPartida(usuario: string, juego: string, fecha: Date, puntaje: number) {
    const { data, error } = await this.supabase
      .from('partidas_juegos')
      .insert([
        { usuario, juego, fecha,puntaje}
      ]);

    if (error) {
      console.error('Error guardando partida:', error.message);
      throw error;
    }
    return data;
  }

  async guardarPartidaAhorcado(usuario: string, letras_usadas: number, palabra_acertada: number) {
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
      .order('fecha', { ascending: true })
      .limit(10)
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

  async getPreguntas() {
    const { data, error } = await this.supabase
      .from('preguntados')
      .select('*')

    if (error) throw error;
    return data;
  }

  async guardarPartidaPreguntados(usuario: string, preguntas_acertadas: number, preguntas_incorrectas: number) {
    const { data, error } = await this.supabase
      .from('partidaspreguntados')
      .insert([
        { usuario, preguntas_acertadas, preguntas_incorrectas }
      ]);

    if (error) {
      console.error('Error guardando partida:', error.message);
      throw error;
    }
    return data;
  }

  async guardarPartidaB(usuario: string, barcos_descubiertostotal: number, partidas_ganadas: number) {
    const { data, error } = await this.supabase
      .from('partidasbn')
      .insert([
        { usuario, barcos_descubiertostotal, partidas_ganadas }
      ]);

    if (error) {
      console.error('Error guardando partida:', error.message);
      throw error;
    }
    return data;
  }

  async getRankingM() {
    const { data, error } = await this.supabase
    .from('partidas_juegos')
    .select('*')
    .eq('juego', 'mayor-menor')
    .order('puntaje', {ascending: false})
    .limit(5)

    return data || [];
  }

  async getRankingAhorcado() {
    const { data, error } = await this.supabase
    .from('partidas_juegos')
    .select('*')
    .eq('juego', 'ahorcado')
    .order('puntaje', {ascending: false})
    .limit(5)
    return data || [];
  }

  async getRankingPreguntados() {
    const { data, error } = await this.supabase
    .from('partidas_juegos')
    .select('*')
    .eq('juego', 'preguntados')
    .order('puntaje', {ascending: false})
    .limit(5)

    return data || [];
  }

  async getRankingB() {
    const { data, error } = await this.supabase
    .from('partidas_juegos')
    .select('*')
    .eq('juego', 'batalla-naval')
    .order('puntaje', {ascending: false})
    .limit(5)

    return data || [];
  }
} 

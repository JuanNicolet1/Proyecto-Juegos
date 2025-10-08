import { Component } from '@angular/core';
import { SupabaseService } from '../../../../services/supabase';
import { RouterLink } from '@angular/router';
import { Nav } from '../../../../Componentes/nav/nav';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-mayor-menor',
  imports: [RouterLink, Nav],
  templateUrl: './mayor-menor.html',
  styleUrl: './mayor-menor.css'
})
export class MayorMenor {
  mazo = ['assets/cartas/2_of_clubs.png',
    'assets/cartas/2_of_diamonds.png',
    'assets/cartas/2_of_hearts.png',
    'assets/cartas/2_of_spades.png',
    'assets/cartas/3_of_clubs.png',
    'assets/cartas/3_of_diamonds.png',
    'assets/cartas/3_of_hearts.png',
    'assets/cartas/3_of_spades.png',
    'assets/cartas/4_of_clubs.png',
    'assets/cartas/4_of_diamonds.png',
    'assets/cartas/4_of_hearts.png',
    'assets/cartas/4_of_spades.png',
    'assets/cartas/5_of_clubs.png',
    'assets/cartas/5_of_diamonds.png',
    'assets/cartas/5_of_hearts.png',
    'assets/cartas/5_of_spades.png',
    'assets/cartas/6_of_clubs.png',
    'assets/cartas/6_of_diamonds.png',
    'assets/cartas/6_of_hearts.png',
    'assets/cartas/6_of_spades.png',
    'assets/cartas/7_of_clubs.png',
    'assets/cartas/7_of_diamonds.png',
    'assets/cartas/7_of_hearts.png',
    'assets/cartas/7_of_spades.png',
    'assets/cartas/8_of_clubs.png',
    'assets/cartas/8_of_diamonds.png',
    'assets/cartas/8_of_hearts.png',
    'assets/cartas/8_of_spades.png',
    'assets/cartas/9_of_clubs.png',
    'assets/cartas/9_of_diamonds.png',
    'assets/cartas/9_of_hearts.png',
    'assets/cartas/9_of_spades.png',
    'assets/cartas/10_of_clubs.png',
    'assets/cartas/10_of_diamonds.png',
    'assets/cartas/10_of_hearts.png',
    'assets/cartas/10_of_spades.png',
    'assets/cartas/1_of_clubs.png',
    'assets/cartas/1_of_diamonds.png',
    'assets/cartas/1_of_hearts.png',
    'assets/cartas/1_of_spades.png',
    'assets/cartas/11_of_spades.png',
    'assets/cartas/11_of_clubs.png',
    'assets/cartas/11_of_diamonds.png',
    'assets/cartas/11_of_hearts.png',
    'assets/cartas/12_of_spades.png',
    'assets/cartas/12_of_clubs.png',
    'assets/cartas/12_of_diamonds.png',
    'assets/cartas/12_of_hearts.png',
    'assets/cartas/13_of_spades.png',
    'assets/cartas/13_of_clubs.png',
    'assets/cartas/13_of_diamonds.png',
    'assets/cartas/13_of_hearts.png'
  ];

  inicio = true;
  en_juego = false;
  juego = "mayor-menor"
  fecha: Date = new Date();
  puntaje = 0;
  imagen = '';
  imagen2 = '';
  mostrarNum = "0";
  vidas = 3;
  valor = 0;
  valor2 = 0;
  mostrarRival = false;
  mensaje = '';
  perder = false;
  num: string = '';
  num2: string = '';
  usuario: string = 'Juan';
  ronda_perdida = 0;
  ronda_ganada = 0;
  modo = '';
  ronda = 1;

  constructor(private supabaseService: SupabaseService, private auth: AuthService) {
    this.siguienteRonda();
  }

  getRandomNumber(): string {
    const randomIndex = Math.floor(Math.random() * this.mazo.length);
    return this.mazo[randomIndex];
  }

  getValor(num: string): number {
    const nombre = num.split('/').pop() || '';
    const valor = parseInt(nombre.split('_')[0], 10);
    return valor;
  }

  getImagen() {
    this.imagen = this.num;
    this.imagen2 = this.num2;
  }

  modoNormal(){
    this.modo = 'normal';
    this.inicio = false;
    this.en_juego = true;
    return this.modo;
  }
  
  modoInfinito(){
    this.modo = 'infinito';
    this.inicio = false;
    this.en_juego = true;
  }

  siguienteRonda() {
    this.num = this.getRandomNumber();
    this.num2 = this.getRandomNumber();
    this.valor = this.getValor(this.num);
    this.valor2 = this.getValor(this.num2);
    this.getImagen();
    this.ronda += 1;
    this.mostrarRival = false;
  }

  reiniciarPartida() {
    this.puntaje = 0;
    this.vidas = 3;
    this.imagen = '';
    this.imagen2 = '';
    this.mostrarNum = "0";
    this.vidas = 3;
    this.valor = 0;
    this.valor2 = 0;
    this.mostrarRival = false;
    this.mensaje = '';
    this.perder = false;
    this.num = '';
    this.num2 = '';
    this.usuario = 'Juan';
    this.ronda_perdida = 0;
    this.ronda_ganada = 0;
    this.modo = '';
    this.ronda = 1;
    this.siguienteRonda();
  }

  mayor() {
    this.mostrarRival = true;
      if (this.valor2 > this.valor || this.valor2 === this.valor) {
        this.mensaje = "Ganaste";
        this.puntaje += 1;
        this.ronda_ganada += 1;
        this.chequeoModo();
      } else {
        this.mensaje = "Perdiste";
        this.vidas -= 1;
        this.ronda_perdida += 1;
        
        this.chequeo();
      }
  }

  menor() {
    this.mostrarRival = true;
      if (this.valor2 < this.valor || this.valor2 === this.valor) {
        this.mensaje = "Ganaste";
        this.puntaje += 1;
        this.ronda_ganada += 1;
        this.chequeoModo();
      } else {
        this.mensaje = "Perdiste";
        this.vidas -= 1;
        this.ronda_perdida += 1;
        
        this.chequeo();
      }
  }

  chequeo() {
    if (this.vidas === 0) {
      this.perder = true;
      this.mensaje = "Perdiste el juego";
      this.guardar();
    }
  }

  chequeoModo() {
    if (this.modo === 'normal' && this.puntaje >= 15) {
      this.perder = true;
      this.mensaje = "Ganaste el juego";
      this.guardar();
    }
  }

  guardar() {
    this.usuario = this.auth.username();
    this.fecha = new Date(); 
    this.supabaseService.guardarPartida(
    this.usuario,
    this.juego,
    this.fecha,
    this.puntaje
    ).then(() => {
      console.log('Partida guardada en la BD');
    }).catch(err => {
      console.error('No se pudo guardar la partida', err);
    });
  }
}
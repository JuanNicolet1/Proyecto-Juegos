import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { Nav } from '../../../../Componentes/nav/nav';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';
import { SupabaseService } from '../../../../services/supabase';

@Component({
  selector: 'app-preguntados',
  imports: [Nav, RouterLink],
  templateUrl: './preguntados.html',
  styleUrl: './preguntados.css'
})
export class Preguntados implements OnInit {
  preguntas: any[] = [];
  preguntaActual: any;
  juego = "preguntados";
  fecha: Date = new Date();
  index = 0;
  inicio = true;
  vidas = 5;
  lives = false;
  perdido = false;
  usuario = '';
  puntaje = 0;

  constructor(private supabaseService: SupabaseService, private cdr: ChangeDetectorRef, private auth: AuthService) {}

  async ngOnInit() {
    this.preguntas = await this.supabaseService.getPreguntas() || [];
    this.preguntaActual = this.preguntas[this.index];
    this.cdr.detectChanges(); 
  }

  conVida(){
    this.vidas = 5;
    this.inicio = false;
    this.lives = true;
  }

  sinVida(){
    this.vidas = 100;
    this.inicio = false;
  }

  respuesta(opcion: string) {
    if (opcion === this.preguntaActual.correcta) {
      this.puntaje += 1;
    } else{
      this.puntaje -= 1;
      this.vidas -= 1;
    }

    if(this.puntaje === -1){
        this.puntaje = 0;
      }

    if(this.vidas === 0){
      this.perdido = true;
      this.guardar();
    }

    this.index++;
    if (this.index < this.preguntas.length) {
      this.preguntaActual = this.preguntas[this.index];
    } else {
      console.log(this.usuario, this.puntaje);

      this.guardar();
      this.index = 0;
      this.preguntaActual = this.preguntas[this.index];
    }
    this.cdr.detectChanges();
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

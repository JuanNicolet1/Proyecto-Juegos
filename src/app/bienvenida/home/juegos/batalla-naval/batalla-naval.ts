import { Component, OnInit } from '@angular/core';
import { SupabaseService } from '../../../../services/supabase';
import { Nav } from '../../../../Componentes/nav/nav';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { ResultadoBatallaPipe } from '../../../../pipe/pipe'
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-batalla-naval',
  imports: [Nav, RouterLink, NgClass, ResultadoBatallaPipe],
  templateUrl: './batalla-naval.html',
  styleUrl: './batalla-naval.css'
})
export class BatallaNaval implements OnInit{
  usuario = '';
  juego = "batalla-naval";
  fecha: Date = new Date();
  mensaje_victoria = false;
  mensaje_derrota = false;
  barcos_restantes = 5;
  puntaje = 0;
  barcos_descubiertosTotal = 0;
  partidas_ganadas= 0;
  disparos = 8;
  perdido = false
  victoria = false;
  click1 = false
  click2 = false
  click3 = false
  click4 = false
  click5 = false
  click6 = false
  click7 = false
  click8 = false
  click9 = false
  click10 = false
  click11 = false
  click12 = false
  click13 = false
  click14 = false
  click15 = false
  click16 = false
  click17 = false
  click18 = false
  click19 = false
  click20 = false
  click21 = false
  click22 = false
  click23 = false
  click24 = false
  click25 = false
  estado1 = "-";
  estado2 = "-";
  estado3 = "-";
  estado4 = "-";
  estado5 = "-";
  estado6 = "-";
  estado7 = "-";
  estado8 = "-";
  estado9 = "-";
  estado10 = "-";
  estado11 = "-";
  estado12= "-";
  estado13 = "-";
  estado14 = "-";
  estado15 = "-";
  estado16 = "-";
  estado17 = "-";
  estado18 = "-";
  estado19 = "-";
  estado20 = "-";
  estado21 = "-";
  estado22 = "-";
  estado23 = "-";
  estado24 = "-";
  estado25 = "-";

  array = [0, 0, 0, 0, 0,
         0, 0, 0, 0, 0,
         0, 0, 0, 0, 0,
         0, 0, 0, 0, 0,
      0, 0, 0, 0, 0
  ]

  constructor(private supabaseService: SupabaseService, private auth: AuthService) {}

  getRandomNumber() {
    const randomIndex = Math.floor(Math.random() * this.array.length);
    return randomIndex;
  }

  esconderBarco() {
    const barco = this.getRandomNumber();
    if(this.array[barco] != 1){
    this.array[barco] = 1;
    } else{
      this.esconderBarco();
    }

    return this.array;
  }

  ngOnInit(): void {
    for(let i = 0; i < 5; i++){
      this.esconderBarco();
    }
  }

  chequear1(){
    this.click1 = true;
    if(this.array[0] == 1){
      this.estado1 = "barco";
      this.mensaje_derrota = false;
      this.mensaje_victoria = true;
      this.barcos_restantes -= 1;
      this.puntaje += 1;
      this.barcos_descubiertosTotal += 1;
      this.chequearVictoria();
    } else{
      this.estado1 = "noBarco";
      this.mensaje_victoria = false;
      this.mensaje_derrota = true;
      this.disparos -= 1;
      this.chequearVida();
    }
  }
chequear2(){
  this.click2 = true;
  if(this.array[1] == 1){
    this.estado2 = "barco";
    this.mensaje_derrota = false;
    this.mensaje_victoria = true;
    this.barcos_restantes -= 1;
    this.puntaje += 1;
    this.barcos_descubiertosTotal += 1;
    this.chequearVictoria();
  } else{
    this.estado2 = "noBarco";
    this.mensaje_victoria = false;
    this.mensaje_derrota = true;
    this.disparos -= 1;
    this.chequearVida();
  }
}
chequear3(){
  this.click3 = true;
  if(this.array[2] == 1){
    this.estado3 = "barco";
    this.mensaje_derrota = false;
    this.mensaje_victoria = true;
    this .barcos_restantes -= 1;
    this.puntaje += 1;
    this.barcos_descubiertosTotal += 1;
    this.chequearVictoria();
  } else{
    this.estado3 = "noBarco";
    this.mensaje_victoria = false;
    this.mensaje_derrota = true;
    this.disparos -= 1;
    this.chequearVida();
  }
}
chequear4(){
  this.click4 = true;
  if(this.array[3] == 1){
    this.estado4 = "barco";
    this.mensaje_derrota = false;
    this.mensaje_victoria = true;
    this.barcos_restantes -= 1;
    this.puntaje += 1;
    this.barcos_descubiertosTotal += 1;
    this.chequearVictoria();
  } else{
    this.estado4 = "noBarco";
    this.mensaje_victoria = false;
    this.mensaje_derrota = true;
    this.disparos -= 1;
    this.chequearVida();
  }
}
chequear5(){
  this.click5 = true;
  if(this.array[4] == 1){
    this.estado5 = "barco";
    this.mensaje_derrota = false;
    this.mensaje_victoria = true;
    this.barcos_restantes -= 1;
    this.puntaje += 1;
    this.barcos_descubiertosTotal += 1;
    this.chequearVictoria();
  } else{
    this.estado5 = "noBarco";
    this.mensaje_victoria = false;
    this.mensaje_derrota = true;
    this.disparos -= 1;
    this.chequearVida();
  }
}
chequear6(){
  this.click6 = true;
  if(this.array[5] == 1){
    this.estado6 = "barco";
    this.mensaje_derrota = false;
    this.mensaje_victoria = true;
    this.barcos_restantes -= 1;
    this.puntaje += 1;
      this.barcos_descubiertosTotal += 1;
    this.chequearVictoria();
  } else{
    this.estado6 = "noBarco";
    this.mensaje_victoria = false;
    this.mensaje_derrota = true;
    this.disparos -= 1;
    this.chequearVida();
  }
}
chequear7(){
  this.click7 = true;
  if(this.array[6] == 1){
    this.estado7 = "barco";
    this.mensaje_derrota = false;
    this.mensaje_victoria = true;
    this.barcos_restantes -= 1;
    this.puntaje += 1;
    this.barcos_descubiertosTotal += 1;
    this.chequearVictoria();
  } else{
    this.estado7 = "noBarco";
    this.mensaje_victoria = false;
    this.mensaje_derrota = true;
    this.disparos -= 1;
    this.chequearVida();
  }
}
chequear8(){
  this.click8 = true;
  if(this.array[7] == 1){
    this.estado8 = "barco";
    this.mensaje_derrota = false;
    this.mensaje_victoria = true;
    this.barcos_restantes -= 1;
    this.puntaje += 1;
    this.barcos_descubiertosTotal += 1;
    this.chequearVictoria();
  } else{
    this.estado8 = "noBarco";
    this.mensaje_victoria = false;
    this.mensaje_derrota = true;
    this.disparos -= 1;
    this.chequearVida();
  }
}
chequear9(){
  this.click9 = true;
  if(this.array[8] == 1){
    this.estado9 = "barco";
    this.mensaje_derrota = false;
    this.mensaje_victoria = true;
    this.barcos_restantes -= 1;
    this.puntaje += 1;
      this.barcos_descubiertosTotal += 1;
    this.chequearVictoria();
  } else{
    this.estado9 = "noBarco";
    this.mensaje_victoria = false;
    this.mensaje_derrota = true;
    this.disparos -= 1;
    this.chequearVida();
  }
}
chequear10(){
  this.click10 = true;
  if(this.array[9] == 1){
    this.estado10 = "barco";
    this.mensaje_derrota = false;
    this.mensaje_victoria = true;
    this.barcos_restantes -= 1;
    this.puntaje += 1;
    this.barcos_descubiertosTotal += 1;
    this.chequearVictoria();
  } else{
    this.estado10 = "noBarco";
    this.mensaje_victoria = false;
    this.mensaje_derrota = true;
    this.disparos -= 1;
    this.chequearVida();
  }
}
chequear11(){
  this.click11 = true;
  if(this.array[10] == 1){
    this.estado11 = "barco";
    this.mensaje_derrota = false;
    this.mensaje_victoria = true;
    this.barcos_restantes -= 1;
    this.puntaje += 1;
    this.barcos_descubiertosTotal += 1;
    this.chequearVictoria();
  } else{
    this.estado11 = "noBarco";
    this.mensaje_victoria = false;
    this.mensaje_derrota = true;
    this.disparos -= 1;
    this.chequearVida();
  }
}
chequear12(){
  this.click12 = true;
  if(this.array[11] == 1){
    this.estado12 = "barco";
    this.mensaje_derrota = false;
    this.mensaje_victoria = true;
    this.barcos_restantes -= 1;
    this.puntaje += 1;
    this.barcos_descubiertosTotal += 1;
    this.chequearVictoria();
  } else{
    this.estado12 = "noBarco";
    this.mensaje_victoria = false;
    this.mensaje_derrota = true;
    this.disparos -= 1;
    this.chequearVida();
  }
}
chequear13(){
  this.click13 = true;
  if(this.array[12] == 1){
    this.estado13 = "barco";
    this.mensaje_derrota = false;
    this.mensaje_victoria = true;
    this.barcos_restantes -= 1;
    this.puntaje += 1;
    this.barcos_descubiertosTotal += 1;
    this.chequearVictoria();
  } else{
    this.estado13 = "noBarco";
    this.mensaje_victoria = false;
    this.mensaje_derrota = true;
    this.disparos -= 1;
    this.chequearVida();
  }
}
chequear14(){
  this.click14 = true;
  if(this.array[13] == 1){
    this.estado14 = "barco";
    this.mensaje_derrota = false;
    this.mensaje_victoria = true;
    this.barcos_restantes -= 1;
    this.puntaje += 1;
    this.barcos_descubiertosTotal += 1;
    this.chequearVictoria();
  } else{
    this.estado14 = "noBarco";
    this.mensaje_victoria = false;
    this.mensaje_derrota = true;
    this.disparos -= 1;
    this.chequearVida();
  }
}
chequear15(){
  this.click15 = true;
  if(this.array[14] == 1){
    this.estado15 = "barco";
    this.mensaje_derrota = false;
    this.mensaje_victoria = true;
    this.barcos_restantes -= 1;
    this.puntaje += 1;
    this.barcos_descubiertosTotal += 1;
    this.chequearVictoria();
  } else{
    this.estado15 = "noBarco";
    this.mensaje_victoria = false;
    this.mensaje_derrota = true;
    this.disparos -= 1;
    this.chequearVida();
  }
}
chequear16(){
  this.click16 = true;
  if(this.array[15] == 1){
    this.estado16 = "barco";
    this.mensaje_derrota = false;
    this.mensaje_victoria = true;
    this.barcos_restantes -= 1;
    this.puntaje += 1;
    this.barcos_descubiertosTotal += 1;
    this.chequearVictoria();
  } else{
    this.estado16 = "noBarco";
    this.mensaje_victoria = false;
    this.mensaje_derrota = true;
    this.disparos -= 1;
    this.chequearVida();
  }
}
chequear17(){
  this.click17 = true;
  if(this.array[16] == 1){
    this.estado17 = "barco";
    this.mensaje_derrota = false;
    this.mensaje_victoria = true;
    this.barcos_restantes -= 1;
    this.puntaje += 1;
    this.barcos_descubiertosTotal += 1;
    this.chequearVictoria();
  } else{
    this.estado17 = "noBarco";
    this.mensaje_victoria = false;
    this.mensaje_derrota = true;
    this.disparos -= 1;
    this.chequearVida();
  }
}
chequear18(){
  this.click18 = true;
  if(this.array[17] == 1){
    this.estado18 = "barco";
    this.mensaje_derrota = false;
    this.mensaje_victoria = true;
    this.barcos_restantes -= 1;
    this.puntaje += 1;
    this.barcos_descubiertosTotal += 1;
    this.chequearVictoria();
  } else{
    this.estado18 = "noBarco";
    this.mensaje_victoria = false;
    this.mensaje_derrota = true;
    this.disparos -= 1;
    this.chequearVida();
  }
}

chequear19(){
  this.click19 = true;
  if(this.array[18] == 1){
    this.estado19 = "barco";
    this.mensaje_derrota = false;
    this.mensaje_victoria = true;
    this.barcos_restantes -= 1;
    this.puntaje += 1;
    this.barcos_descubiertosTotal += 1;
    this.chequearVictoria();
  } else{
    this.estado19 = "noBarco";
    this.mensaje_victoria = false;
    this.mensaje_derrota = true;
    this.disparos -= 1;
    this.chequearVida();
  }
}

chequear20(){
  this.click20 = true;
  if(this.array[19] == 1){
    this.estado20 = "barco";
    this.mensaje_derrota = false;
    this.mensaje_victoria = true;
    this.barcos_restantes -= 1;
    this.puntaje += 1;
    this.barcos_descubiertosTotal += 1;
    this.chequearVictoria();
  } else{
    this.estado20 = "noBarco";
    this.mensaje_victoria = false;
    this.mensaje_derrota = true;
    this.disparos -= 1;
    this.chequearVida();
  }
}

chequear21(){
  this.click21 = true;
  if(this.array[20] == 1){
    this.estado21 = "barco";
    this.mensaje_derrota = false;
    this.mensaje_victoria = true;
    this.barcos_restantes -= 1;
    this.puntaje += 1;
    this.barcos_descubiertosTotal += 1;
    this.chequearVictoria();
  } else{
    this.estado21 = "noBarco";
    this.mensaje_victoria = false;
    this.mensaje_derrota = true;
    this.disparos -= 1;
    this.chequearVida();
  }
}

chequear22(){
  this.click22 = true;
  if(this.array[21] == 1){
    this.estado22 = "barco";
    this.mensaje_derrota = false;
    this.mensaje_victoria = true;
    this.barcos_restantes -= 1;
    this.puntaje += 1;
    this.barcos_descubiertosTotal += 1;
    this.chequearVictoria();
  } else{
    this.estado22 = "noBarco";
    this.mensaje_victoria = false;
    this.mensaje_derrota = true;
    this.disparos -= 1;
    this.chequearVida();
  }
}

chequear23(){
  this.click23 = true;
  if(this.array[22] == 1){
    this.estado23 = "barco";
    this.mensaje_derrota = false;
    this.mensaje_victoria = true;
    this.barcos_restantes -= 1;
    this.puntaje += 1;
    this.barcos_descubiertosTotal += 1;
    this.chequearVictoria();
  } else{
    this.estado23 = "noBarco";
    this.mensaje_victoria = false;
    this.mensaje_derrota = true;
    this.disparos -= 1;
    this.chequearVida();
  }
}

chequear24(){
  this.click24 = true;
  if(this.array[23] == 1){
    this.estado24 = "barco";
    this.mensaje_derrota = false;
    this.mensaje_victoria = true;
    this.barcos_restantes -= 1;
    this.puntaje += 1;
    this.barcos_descubiertosTotal += 1;
    this.chequearVictoria();
  } else{
    this.estado24 = "noBarco";
    this.mensaje_victoria = false;
    this.mensaje_derrota = true;
    this.disparos -= 1;
    this.chequearVida();
  }
}

chequear25(){
  this.click25 = true;
  this.click25 = true;
  if(this.array[24] == 1){
    this.estado25 = "barco";
    this.mensaje_derrota = false;
    this.mensaje_victoria = true;
    this.barcos_restantes -= 1;
    this.puntaje += 1;
    this.barcos_descubiertosTotal += 1;
    this.chequearVictoria();
  } else{
    this.estado25 = "noBarco";
    this.mensaje_victoria = false;
    this.mensaje_derrota = true;
    this.disparos -= 1;
    this.chequearVida();
  }
}

  chequearVida(){
    if(this.disparos === 0){
      this.mensaje_derrota;
      this.perdido = true;
      this.guardar()
    }
  }

  chequearVictoria(){
    if(this.barcos_restantes === 0){
      this.victoria = true;
      this.mensaje_victoria = false;
      this.partidas_ganadas += 1
    }
  }
  
  reiniciar(){
    this.array = [0, 0, 0, 0, 0,
         0, 0, 0, 0, 0,
         0, 0, 0, 0, 0,
         0, 0, 0, 0, 0,
      0, 0, 0, 0, 0
  ]
    for(let i = 0; i < 5; i++){
      this.esconderBarco();
    }
    this.mensaje_victoria = false;
    this.mensaje_derrota = false;
    this.barcos_restantes = 5;
    this.puntaje += 1;
    this.partidas_ganadas = 0;
    this.disparos = 8;
    this.perdido = false
    this.victoria = false;
    this.click1 = false
    this.click2 = false
    this.click3 = false
    this.click4 = false
    this.click5 = false
    this.click6 = false
    this.click7 = false
    this.click8 = false
    this.click9 = false
    this.click10 = false
    this.click11 = false
    this.click12 = false
    this.click13 = false
    this.click14 = false
    this.click15 = false
    this.click16 = false
    this.click17 = false
    this.click18 = false
    this.click19 = false
    this.click20 = false
    this.click21 = false
    this.click22 = false
    this.click23 = false
    this.click24 = false
    this.click25 = false
    this.estado1 = "-";
    this.estado2 = "-";
    this.estado3 = "-";
    this.estado4 = "-";
    this.estado5 = "-";
    this.estado6 = "-";
    this.estado7 = "-";
    this.estado8 = "-";
    this.estado9 = "-";
    this.estado10 = "-";
    this.estado11 = "-";
    this.estado12= "-";
    this.estado13 = "-";
    this.estado14 = "-";
    this.estado15 = "-";
    this.estado16 = "-";
    this.estado17 = "-";
    this.estado18 = "-";
    this.estado19 = "-";
    this.estado20 = "-";
    this.estado21 = "-";
    this.estado22 = "-";
    this.estado23 = "-";
    this.estado24 = "-";
    this.estado25 = "-";
  }

  siguiente(){
    this.array = [0, 0, 0, 0, 0,
         0, 0, 0, 0, 0,
         0, 0, 0, 0, 0,
         0, 0, 0, 0, 0,
      0, 0, 0, 0, 0
  ]
    for(let i = 0; i < 6; i++){
      this.esconderBarco();
    }
    this.mensaje_victoria = false;
    this.mensaje_derrota = false;
    this.barcos_restantes = 6;
    this.disparos = 9;
    this.perdido = false
    this.victoria = false;
    this.click1 = false
    this.click2 = false
    this.click3 = false
    this.click4 = false
    this.click5 = false
    this.click6 = false
    this.click7 = false
    this.click8 = false
    this.click9 = false
    this.click10 = false
    this.click11 = false
    this.click12 = false
    this.click13 = false
    this.click14 = false
    this.click15 = false
    this.click16 = false
    this.click17 = false
    this.click18 = false
    this.click19 = false
    this.click20 = false
    this.click21 = false
    this.click22 = false
    this.click23 = false
    this.click24 = false
    this.click25 = false
    this.estado1 = "-";
    this.estado2 = "-";
    this.estado3 = "-";
    this.estado4 = "-";
    this.estado5 = "-";
    this.estado6 = "-";
    this.estado7 = "-";
    this.estado8 = "-";
    this.estado9 = "-";
    this.estado10 = "-";
    this.estado11 = "-";
    this.estado12= "-";
    this.estado13 = "-";
    this.estado14 = "-";
    this.estado15 = "-";
    this.estado16 = "-";
    this.estado17 = "-";
    this.estado18 = "-";
    this.estado19 = "-";
    this.estado20 = "-";
    this.estado21 = "-";
    this.estado22 = "-";
    this.estado23 = "-";
    this.estado24 = "-";
    this.estado25 = "-";
  }

  revelar() {
  for (let i = 1; i <= 25; i++) {

    const arrayIndex = i - 1;

    
    if (this.array[arrayIndex] === 1) {
      (this as any)['estado' + i] = 'barco';
    }

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

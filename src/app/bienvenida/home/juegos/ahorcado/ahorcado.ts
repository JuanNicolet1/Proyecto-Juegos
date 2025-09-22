import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Nav } from '../../../../Componentes/nav/nav';
import { AuthService } from '../../../../services/auth.service';
import { SupabaseService } from '../../../../services/supabase';

@Component({
  selector: 'app-ahorcado',
  imports: [RouterLink, Nav],
  templateUrl: './ahorcado.html',
  styleUrl: './ahorcado.css'
})
export class Ahorcado {
  palabras = ['ANGULAR', 'JAVASCRIPT', 'HTML', 'CSS', 'TYPESCRIPT', 'SUPABASE'];
  vida = 6;
  mensaje = '';
  puestoA = false;
  puestoB = false;
  puestoC = false;
  puestoD = false;
  puestoE = false;
  puestoF = false;
  puestoG = false;
  puestoH = false;
  puestoI = false;
  puestoJ = false;
  puestoK = false;
  puestoL = false;
  puestoM = false;
  puestoN = false;
  puestoENIE = false;
  puestoO = false;
  puestoP = false;
  puestoQ = false;
  puestoR = false;
  puestoS = false;
  puestoT = false;
  puestoU = false;
  puestoV = false;
  puestoW = false;
  puestoX = false;
  puestoY = false;
  puestoZ = false;

  usuario = '';
  letras_usadas = 0;
  palabra_acertada = '';

  constructor(private supabaseService: SupabaseService, private auth: AuthService) {}

  getRandomPalabra(): string {
    const randomIndex = Math.floor(Math.random() * this.palabras.length);
    return this.palabras[randomIndex];
  }

  palabra = this.getRandomPalabra();
  palabraOculta = '_'.repeat(this.palabra.length).trim()
  letra = '';
  letrasUsadas: string[] = [];

  comprobarLetra() {
  if (this.palabra.includes(this.letra)) {
    const palabraOcultaArray = this.palabraOculta.split('');
    for (let i = 0; i < this.palabra.length; i++) {
      if (this.palabra[i] === this.letra) {
        palabraOcultaArray[i] = this.letra;
      }
    }
    this.palabraOculta = palabraOcultaArray.join('');
  } else {
    this.vida -=1;
  }

  if(this.palabraOculta === this.palabra) {
    this.mensaje = "¡Ganaste! La palabra es " + this.palabra;
    this.palabra_acertada = 'Si';
    this.guardarAhorcado();
  }

  if(this.vida === 0) {
    this.mensaje = "Perdiste. La palabra era " + this.palabra;
    this.palabra_acertada = 'No';
    this.guardarAhorcado();
  }
}

  a(){
    this.letra = "A";
    this.letrasUsadas.push(this.letra);
    this.letras_usadas += 1;
    this.comprobarLetra();
    this.puestoA = true;
  }

  b(){
    this.letra = "B";
    this.letrasUsadas.push(this.letra);
    this.letras_usadas += 1;
    this.comprobarLetra();
    this.puestoB = true;
  }

  c(){
    this.letra = "C";
    this.letrasUsadas.push(this.letra);
    this.letras_usadas += 1;
    this.comprobarLetra();
    this.puestoC = true;
  }

  d(){
    this.letra = "D";
    this.letrasUsadas.push(this.letra);
    this.letras_usadas += 1;
    this.comprobarLetra();
    this.puestoD = true;
  }

  e(){
    this.letra = "E";
    this.letrasUsadas.push(this.letra);
    this.letras_usadas += 1;
    this.comprobarLetra();
    this.puestoE = true;
  }

  f(){
    this.letra = "F";
    this.letrasUsadas.push(this.letra);
    this.letras_usadas += 1;
    this.comprobarLetra();
    this.puestoF = true;
  }

  g(){
    this.letra = "G";
    this.letrasUsadas.push(this.letra);
    this.letras_usadas += 1;
    this.comprobarLetra();
    this.puestoG = true;
  }

  h(){
    this.letra = "H";
    this.letrasUsadas.push(this.letra);
    this.letras_usadas += 1;
    this.comprobarLetra();
    this.puestoH = true;
  }

  i(){
    this.letra = "I";
    this.letrasUsadas.push(this.letra);
    this.letras_usadas += 1;
    this.comprobarLetra();
    this.puestoI = true;
  }

  j(){  
    this.letra = "J";
    this.letrasUsadas.push(this.letra);
    this.letras_usadas += 1;
    this.comprobarLetra();
    this.puestoJ = true;
  }

  k(){
    this.letra = "K";
    this.letrasUsadas.push(this.letra);
    this.letras_usadas += 1;
    this.comprobarLetra();
    this.puestoK = true;
  }

  l(){
    this.letra = "L";
    this.letrasUsadas.push(this.letra);
    this.letras_usadas += 1;
    this.comprobarLetra();
    this.puestoL = true;
  }

  m(){
    this.letra = "M";
    this.letrasUsadas.push(this.letra);
    this.letras_usadas += 1;
    this.comprobarLetra();
    this.puestoM = true;
  }

  n(){
    this.letra = "N";
    this.letrasUsadas.push(this.letra);
    this.letras_usadas += 1;
    this.comprobarLetra();
    this.puestoN = true;
  }

  enie(){
    this.letra = "Ñ";
    this.letrasUsadas.push(this.letra);
    this.letras_usadas += 1;
    this.comprobarLetra();
    this.puestoENIE = true;
  }

  o(){
    this.letra = "O";
    this.letrasUsadas.push(this.letra);
    this.letras_usadas += 1;
    this.comprobarLetra();
    this.puestoO = true;
  }

  p(){
    this.letra = "P";
    this.letrasUsadas.push(this.letra);
    this.letras_usadas += 1;
    this.comprobarLetra();
    this.puestoP = true;
  }

  q(){
    this.letra = "Q";
    this.letrasUsadas.push(this.letra);
    this.letras_usadas += 1;
    this.comprobarLetra();
    this.puestoQ = true;
  }

  r(){
    this.letra = "R";
    this.letrasUsadas.push(this.letra);
    this.letras_usadas += 1;
    this.comprobarLetra();
    this.puestoR = true;
  }

  s(){
    this.letra = "S";
    this.letrasUsadas.push(this.letra);
    this.letras_usadas += 1;
    this.comprobarLetra();
    this.puestoS = true;
  }

  t(){
    this.letra = "T";
    this.letrasUsadas.push(this.letra);
    this.letras_usadas += 1;
    this.comprobarLetra();
    this.puestoT = true;
  }

  u(){
    this.letra = "U";
    this.letrasUsadas.push(this.letra);
    this.letras_usadas += 1;
    this.comprobarLetra();
    this.puestoU = true;
  }

  v(){
    this.letra = "V";
    this.letrasUsadas.push(this.letra);
    this.letras_usadas += 1;
    this.comprobarLetra();
    this.puestoV = true;
  }

  w(){
    this.letra = "W";
    this.letrasUsadas.push(this.letra);
    this.letras_usadas += 1;
    this.comprobarLetra();
    this.puestoW = true;
  }

  x(){
    this.letra = "X";
    this.letrasUsadas.push(this.letra);
    this.letras_usadas += 1;
    this.comprobarLetra();
    this.puestoX = true;
  }

  y(){
    this.letra = "Y";
    this.letrasUsadas.push(this.letra);
    this.letras_usadas += 1;
    this.comprobarLetra();
    this.puestoY = true;
  }

  z(){
    this.letra = "Z";
    this.letrasUsadas.push(this.letra);
    this.letras_usadas += 1;
    this.comprobarLetra();
    this.puestoZ = true;
  }

  guardarAhorcado() {
    this.usuario = this.auth.username();
    this.supabaseService.guardarPartidaAhorcado(
    this.usuario,
    this.letras_usadas,
    this.palabra_acertada
    ).then(() => {
      console.log('Partida guardada en la BD');
    }).catch(err => {
      console.error('No se pudo guardar la partida', err);
    });
  }
}

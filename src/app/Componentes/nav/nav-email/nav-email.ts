import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavEmail {
  saludoN = '';
  saludo = '';
  saludoApellido = ''

  datosNav(nombre: string, apellido: string, email: string){
    this.saludoN = nombre
    this.saludoApellido = apellido;
    this.saludo = email;
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavRol {
  saludoN = '';
  saludo = '';

  datosNavRol(nombre: string, email: string){
    this.saludoN = nombre
    this.saludo = email;
  }
}

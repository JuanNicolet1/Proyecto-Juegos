import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavEmail {
  saludo = '';

  datosNav(email: string){
    this.saludo = email;
  }
}

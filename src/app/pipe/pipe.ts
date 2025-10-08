import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resultadoBatalla',
  standalone: true
})
export class ResultadoBatallaPipe implements PipeTransform {
  transform(resultado: boolean): string {
    return resultado ? 'Ganaste' : 'Perdiste';
  }
}

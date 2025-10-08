import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'error',
  standalone: true
})
export class ErrorPipe implements PipeTransform {
  transform(resultado: boolean): string {
    return resultado ? 'Debes ser mayor de 18 años' : '';
  }
}

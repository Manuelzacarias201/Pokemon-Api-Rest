import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceLetter',
  standalone: true
})
export class ReplaceLetterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

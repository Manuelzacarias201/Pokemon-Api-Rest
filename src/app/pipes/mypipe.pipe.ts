import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe',
  standalone: true
})
export class MypipePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return value;
    return value.replace(/[ao]/gi, 'x');
  }


}

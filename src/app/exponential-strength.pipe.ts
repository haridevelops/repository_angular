import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponentialStrength'
})
export class ExponentialStrengthPipe implements PipeTransform {

  transform(num1: number, num2: string,): number {
    let num = parseFloat(num2);
    return isNaN(num1 * num) ? 0 : num1 * num ; 
    
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatCardNumber',
  pure:true
})
export class FormatCardNumberPipe implements PipeTransform {
  transform(value: string,formatCharacter:string='*'): string {
    console.log("format card pipe executed")
    const last4char=value.slice(-4)
    const formatString=(formatCharacter.repeat(4)+" ").repeat(3)
    const formattedCardNumber=formatString+last4char
    return formattedCardNumber;
  }
}

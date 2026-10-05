import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumbersOnly]',
})
export class NumbersOnly {

  constructor(private elementRef:ElementRef){
    
  }
  @HostListener('keydown',['$event'])
  onKeyDown(event:KeyboardEvent){
    const keyPressed=event.key
    const regex=new RegExp("^\\d$")
    if(!regex.test(keyPressed)){
      event.preventDefault()
    }
  }
}

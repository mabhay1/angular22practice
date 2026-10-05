import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appFocusDirective]',
})
export class FocusDirective {
  elRef=inject(ElementRef)
  constructor(){
    this.elRef.nativeElement.focus()
  }
}

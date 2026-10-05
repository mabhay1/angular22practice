import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class Highlight {
  @Input() colorName:string="red"
  constructor(private elementRef:ElementRef){
  }

  @HostListener('mouseover')
  onMouseOver(){
    this.elementRef.nativeElement.style.color=this.colorName
  }

  @HostListener('mouseout')
  onMouseLeave(){
    this.elementRef.nativeElement.style.color="black"
  }
}

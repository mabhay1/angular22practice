import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appToolTipDir]',
})
export class ToolTipDir {
  divEle:any
  @Input() toolTipText:string=""
  @Input() bgColor:string=""
  constructor(private elRef:ElementRef,private renderer:Renderer2){

  }
  @HostListener('mouseenter')
  onMouseEnter(){
    this.divEle=this.renderer.createElement('div')
    this.renderer.setStyle(this.divEle,'background-color',this.bgColor)
    this.renderer.setStyle(this.divEle,'padding','4px')
    this.renderer.setProperty(this.divEle,'innerText',this.toolTipText)
    this.renderer.setStyle(this.divEle,'position','absolute')
    this.renderer.appendChild(this.elRef.nativeElement,this.divEle)
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.renderer.removeChild(this.elRef.nativeElement,this.divEle)
  }
}

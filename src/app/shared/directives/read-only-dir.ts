import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appReadOnlyDir]',
})
export class ReadOnlyDir {
  constructor(private elRef:ElementRef,private renderer:Renderer2){
    const loggedRole=localStorage.getItem('loggedRole')
    if(loggedRole!==null){
      if(loggedRole==='guest'){
        this.renderer.setAttribute(this.elRef.nativeElement,'readOnly','readOnly')
        // this.renderer.setAttribute(this.elRef.nativeElement,'disabled','true')
        // this.renderer.setAttribute(this.elRef.nativeElement,'disabled','false')
        // this.renderer.removeAttribute(this.elRef.nativeElement,'disabled')
        // this.renderer.setProperty(this.elRef.nativeElement,'disabled',true)
        // this.renderer.setProperty(this.elRef.nativeElement,'disabled',true)
      }
    }
  }
}

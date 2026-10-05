import { Directive, ElementRef, Host, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[appCopyPasteDir]',
})
export class CopyPasteDir {
  elRef=inject(ElementRef)

  @HostListener('click')
  onCopy(){
    const elementValue=this.elRef.nativeElement.innerText
    navigator.clipboard.writeText(elementValue).then(()=>{
      console.log("Text copied")
    }).catch((err)=>{
      console.log(err)
    })

  }
}

import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[appDisableCopyPaste]',
})
export class DisableCopyPaste {
  elRef=inject(ElementRef)

  @HostListener('copy',['$event'])
  onCopy(event:ClipboardEvent){
    event.preventDefault()
  }
  @HostListener('paste',['$event'])
  onPaste(event:ClipboardEvent){
    event.preventDefault()
  }
  @HostListener('contextmenu',['$event'])
  onSelect(event:any){
    event.preventDefault()
  }

  @HostListener('dblclick',['$event'])
  onDoubleClick(event:MouseEvent){
    console.log("double clicked")
  }
}

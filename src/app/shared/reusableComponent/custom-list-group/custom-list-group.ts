import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  imports: [NgClass],
  selector: 'app-custom-list-group',
  styleUrl: './custom-list-group.css',
  templateUrl: './custom-list-group.html',
})
export class CustomListGroup {
  @Input() list:string[]=[]
  @Output() valueSelected=new EventEmitter<string>()
  @Input() selectedValue:string=''
  
  setSelctedValue(item:string){
    this.selectedValue=item
    this.valueSelected.emit(this.selectedValue)
  }
}

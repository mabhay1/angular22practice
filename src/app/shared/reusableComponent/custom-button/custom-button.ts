import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-custom-button',
  styleUrl: './custom-button.css',
  templateUrl: './custom-button.html',
})
export class CustomButton {
  @Input() btnClass:string=""
  @Input() btnTxt:string=""
  @Output() buttonClicked=new EventEmitter<void>()

  onButtonClick(){
    this.buttonClicked.emit()
  }
}

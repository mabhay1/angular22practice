import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  imports: [NgClass],
  selector: 'app-custom-alert',
  styleUrl: './custom-alert.css',
  templateUrl: './custom-alert.html',
})
export class CustomAlert {
  @Input() alertType:AlertType="Success"
  @Input() alertMessage:string=""
  @Input() alertClass:string=""

  getClass(){
    if(this.alertType==='Success'){
      return 'alert-success'
    }
    else if(this.alertType==='Warning'){
      return 'alert-warning'
    }
    else if(this.alertType==='Error'){
      return 'alert-danger'
    }
    else{
      return ''
    }
  }
}

type AlertType='Success'|'Warning'|'Error'

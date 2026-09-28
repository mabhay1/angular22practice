import { SlicePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  imports: [SlicePipe],
  selector: 'app-show-more-less',
  styleUrl: './show-more-less.css',
  templateUrl: './show-more-less.html',
})
export class ShowMoreLess {
  @Input() myText=""
  @Input() minCharacters:number=10
  
  isShow:boolean=false;

  hideShowText(){
    this.isShow=!this.isShow
  }
}

import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  imports: [NgClass],
  selector: 'app-rating',
  styleUrl: './rating.css',
  templateUrl: './rating.html',
})
export class Rating {
  @Input() ratingValue:number=3
  numberArray=[1,2,3,4,5]

}

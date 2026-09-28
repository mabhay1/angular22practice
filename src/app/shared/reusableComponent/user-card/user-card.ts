import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-user-card',
  styleUrl: './user-card.css',
  templateUrl: './user-card.html',
})
export class UserCard {
  @Input() name:string=""
  @Input() age:number=0
  @Input() role:string=""
}

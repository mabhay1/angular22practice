import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  imports: [NgClass],
  selector: 'app-badge-custom',
  styleUrl: './badge-custom.css',
  templateUrl: './badge-custom.html',
})
export class BadgeCustom {
  @Input() status:'Primary'|'Secondary'|'Danger'|'Warning'|''=''
}

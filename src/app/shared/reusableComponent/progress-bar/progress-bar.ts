import { NgStyle } from '@angular/common';
import { Component, Input, signal } from '@angular/core';

@Component({
  imports: [NgStyle],
  selector: 'app-progress-bar',
  styleUrl: './progress-bar.css',
  templateUrl: './progress-bar.html',
})
export class ProgressBar {
  @Input() progress:number=0
  newVariable=""
  newSignal=signal<string>("")
}

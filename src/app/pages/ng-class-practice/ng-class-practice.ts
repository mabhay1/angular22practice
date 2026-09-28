import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [NgClass, FormsModule, NgStyle],
  selector: 'app-ng-class-practice',
  styleUrl: './ng-class-practice.css',
  templateUrl: './ng-class-practice.html',
})
export class NgClassPractice {
  div1Class:string="bg-danger"
  isDiv2ToggleClass:boolean = false
  div3Class="bg-success"
  div4Class=""
  languages=['Html','CSS','JavaScript','TypeScript','Angular','React']
  selectedLanguage=""
  isSidePanelVisible=false
  students = [
    { name: 'Chetan', gender: 'Male', state: 'MH' },
    { name: 'Punesh', gender: 'Male', state: 'MP' },
    { name: 'Sahiti', gender: 'Female', state: 'CG' },
    { name: 'Johar', gender: 'Male', state: 'DL' },
    { name: 'Aditi', gender: 'Female', state: 'PB' }
  ];
  selectedStudentRow=-1
  width=""
  height=""
  radius=""
  color=""
  div1NewStyle:any={}

  toggleDiv2Class(){
    this.isDiv2ToggleClass=!this.isDiv2ToggleClass;
  }
  toggleDiv3Class(){
    if(this.div3Class==='bg-success'){
      this.div3Class='bg-danger'
    }
    else{
      this.div3Class='bg-success'
    }
  }
  addDiv4Class(className:string){
    this.div4Class=className
  }
  setSelectedLanguage(lang:string){
    this.selectedLanguage=lang
  }
  setSelectedStudentRow(index:number){
    this.selectedStudentRow=index
  }
  setStyleDiv1New(){
    this.div1NewStyle={
      width:this.width+'px',
      height:this.height+'px',
      borderRadius:this.radius,
      backgroundColor:this.color
    }
  }
}

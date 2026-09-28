import { JsonPipe, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [NgClass, FormsModule,JsonPipe],
  selector: 'app-forms-practice',
  styleUrl: './forms-practice.css',
  templateUrl: './forms-practice.html',
})
export class FormsPractice {
  personObj = {
    name: "",
    personType: "",
    gender: "",
    age: 0
  }
  personTypes=[
    {label:'Sport Person', icon:'fa-bicycle'},
    {label:'Teacher', icon:'fa-id-card'},
    {label:'Banker', icon:'fa-university'},
    {label:'Musician', icon:'fa-video-camera'}
    ]
  GenderArray=[
    {label:'Male', icon:'fa-male'},
    {label:'Female', icon:'fa-female'},
  ] 
  formSubmitted:boolean=false

  setPersonType(pType:string){
    this.personObj.personType=pType
  } 
  setGender(gender:string){
    this.personObj.gender=gender
  }
  incrementAge(){
    this.personObj.age=this.personObj.age+1
  }
  decrementAge(){
    this.personObj.age=this.personObj.age>0?this.personObj.age-1:0
  }
  onReset(){
    this.personObj = {
    name: "",
    personType: "",
    gender: "",
    age: 0
  }
  this.formSubmitted=false

  }
  onSubmit(){
    this.formSubmitted=true
  }
}

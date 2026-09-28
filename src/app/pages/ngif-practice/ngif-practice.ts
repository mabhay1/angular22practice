import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule, NgIf, NgFor,NgClass],
  selector: 'app-ngif-practice',
  styleUrl: './ngif-practice.css',
  templateUrl: './ngif-practice.html',
})
export class NgifPractice {
  div11textBox1=""
  div11textBox2=""
  gender:string=""
  selectedCategory=""
  isDiv1Visible:boolean = true
  isDiv2Visible:boolean = true
  fName:string=""
  lName:string=""
  state:string=""
  city:string=""

  isTeacher=false
  isSport=false
  isMusician=false

  profession=""
  professionArray=['teacher','sport','musician']
  languages:string[]=['Html','CSS','JavaScript','TypeScript','Angular']
studentArray = [
  {
    name: 'John Doe',
    age: 29,
    attendance: '80%',
    gender: 'M',
    isIndian: true
  },
  {
    name: 'Jane Smith',
    age: 35,
    attendance: '60%',
    gender: 'F',
    isIndian: false
  },
  {
    name: 'Amit Patel',
    age: 42,
    attendance: '70%',
    gender: 'M',
    isIndian: true
  },
  {
    name: 'Linda Brown',
    age: 51,
    attendance: '90%',
    gender: 'F',
    isIndian: false
  },
  {
    name: 'Ravi Singh',
    age: 38,
    attendance: '85%',
    gender: 'M',
    isIndian: true
  }
];
cityTextBox=""
cityArray:string[]=[]
selectedLanguage=""
tableNo:number|null=null
tableArray:string[]=[]
pageObjArray = [
  {
    url: 'https://voidchetan.github.io/voidchetan/angular/ngIf.html',
    text: 'ngIf'
  },
  {
    url: 'https://voidchetan.github.io/voidchetan/angular/ngfor.html',
    text: 'ngFor'
  },
  {
    url: 'https://voidchetan.github.io/voidchetan/angular/ngclass.html',
    text: 'ngClass'
  },
  {
    url: 'https://voidchetan.github.io/voidchetan/angular/ngStyle.html',
    text: 'ngStyle'
  },
  {
    url: 'https://voidchetan.github.io/voidchetan/angular/forms.html',
    text: 'Forms'
  }
]

CityObjArray=[
  {cityId:1,cityName:'Delhi'},
  {cityId:2,cityName:'Sonipat'},
  {cityId:3,cityName:'Pune'},
  {cityId:4,cityName:'Nagpur'},
]
stateObjArray=[
  {stateId:1,stateName:'Haryana'},
  {stateId:2,stateName:'Maharahtra'},
  {stateId:3,stateName:'Goa'},
  {stateId:4,stateName:'UP'},
]
selectedCityId=""
selectedStateId=""
  setSelectedCategory(category:string){
    this.selectedCategory = category
  }
  showHideDiv1(isShow:boolean){
    this.isDiv1Visible=isShow
  }
  toggleDiv2(){
    this.isDiv2Visible= !this.isDiv2Visible
  }
  setSelectedOption(option:string){
    if(this.profession===option){
      this.profession=""
    }
    else{
      this.profession=option
    }
  }
  // setSelectedOptionWithDifferentVariables(option:string){
  //   if(option==='teacher'){
  //     this.isSport=false
  //     this.isMusician=false
  //   }else if(option==='sport'){
  //     this.isTeacher=false
  //     this.isMusician=false
  //   }else if(option==='musician'){
  //     this.isSport=false
  //     this.isTeacher=false
  //   }
  // }

  addCity(){
    if(this.cityArray.includes(this.cityTextBox)){
      alert(this.cityTextBox + " Already Added In Dropdown")
    }
    else{
      this.cityArray.push(this.cityTextBox)
      this.cityTextBox=""
    }
  }

  setSelectedLang(lang:string){
    this.selectedLanguage=lang
  }
  printTable(){
    if(this.tableNo!==null){
      this.tableArray=[]
      for(let i=1;i<=10;i++){
        this.tableArray.push(`${this.tableNo} * ${i} = ${this.tableNo*i}`)
      }
    }
    else{
      alert("Enter Number")
    }
  }

}

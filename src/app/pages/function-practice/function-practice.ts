import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-function-practice',
  styleUrl: './function-practice.css',
  templateUrl: './function-practice.html',
})
export class FunctionPractice {
  number1:number =0;
  resultSquare:number=0;
  resultSum:number=0;
  num1:number=0;
  num2:number=0;
  num3:number=0;
  num4:number=0;
  fullName:string="";
  resultEmail:string=""
  operations:string[] = ["add", "subtract", "multiply", "divide", "modulo", "power"]
  taskCalculateNum1:number=0;
  taskCalculateNum2:number=0;
  selectedOperation:string="";
  taskCalculateResult:number=0;
  analyzeString:string=""
  resultAnalyzeObj:any={
    totalChInSpace:"",
    totalChExSpace:"",
    totalWords:"",
    totalSentences:"",
    mostRepeatCh:"",
  }
  resultTitleCase:string=""
  inputString:string=""
  inputTitleCaseSentence: string=""
  outputTitleCaseSentence: string=""
  counter1:number=0
  counter2:number =0

  constructor(){
    // this.findDataType("Abhay")
    // this.findDataType({})
    // this.findDataType([])
    // console.log(this.checkSameValue(12,"12"))
    // console.log(this.checkSameValue(12,12))
    // console.log(this.checkIsNumber("uuaa"))
    // console.log(this.checkIsNumber("13aa"))
    // console.log(this.checkIsNumber("1234"))
    // console.log(this.checkIsNumber("123.54"))
    // console.log(this.addNumbers("Chetan",23))
    // console.log(this.addNumbers(12,20))
    // this.arrayOfWords("This is my Word")
    // this.arrayOfWords(23123)
  }


  firstFunction(){
    console.log("This is my first function")
  }
  square(num:number){
    this.resultSquare= num*num
  }
  addition(num1:number,num2:number,num3:number,num4:number){
    this.resultSum=num1+num2+num3+num4;
  }
  formatEmail(fullName:string){
    const lowerCaseFullName=fullName.toLowerCase().trim();
    const spaceRemovedString=lowerCaseFullName.replaceAll(" ","")
    this.resultEmail=spaceRemovedString.concat("@company.com")
  }
  calculate(num1:number, num2:number, operation:string){
    console.log(num1,num2,operation)
    switch(this.selectedOperation){
      case "add":
        this.taskCalculateResult=num1+num2;
        alert(`${num1} ${operation} ${num2} is ${this.taskCalculateResult}`)
        break;
      case "subtract":
        this.taskCalculateResult=num1-num2;
        alert(`${num1} ${operation} ${num2} is ${this.taskCalculateResult}`)
        break;
      case "multiply":
        this.taskCalculateResult=num1*num2;
        alert(`${num1} ${operation} ${num2} is ${this.taskCalculateResult}`)
        break;
      case "divide": 
        if(num2===0){
          alert("Cannot divide by 0")
        }
        else{
          this.taskCalculateResult=num1/num2;
          alert(`${num1} ${operation} ${num2} is ${this.taskCalculateResult}`)
        }
        break;
      case "modulo":
        this.taskCalculateResult=num1%num2;
        alert(`${num1} ${operation} ${num2} is ${this.taskCalculateResult}`)
        break;
      case "power":
        this.taskCalculateResult=num1**num2;
        alert(`${num1} ${operation} ${num2} is ${this.taskCalculateResult}`)
        break;
      default:  
        alert("Enter valid operation")    
    }
  }
  analyzeText(text:string){
    this.resultAnalyzeObj.totalChInSpace=text.length
    this.resultAnalyzeObj.totalWords=text.split(" ").length
    this.resultAnalyzeObj.totalSentences=text.split(".").filter(x=>x.trim().length>0).length
    this.resultAnalyzeObj.totalChExSpace = text.replaceAll(" ","").length
    const obj:any={}
    for(let i of text)
    {
      obj[i]=obj[i]+1||1
    }
    let max_char=text[0]
    for(let i in obj){
      if(obj[i] > obj[max_char]){
        max_char=i
      }
    }
    this.resultAnalyzeObj.mostRepeatCh=max_char


  }

  titleCaseFunc(word:string){
    this.resultTitleCase = word[0].toUpperCase()+word.substring(1)
  }

  titleCaseEachString(sentence:string){
    const titleCaseString=sentence.split(" ").map(x=>x[0].toUpperCase()+x.slice(1))
    this.outputTitleCaseSentence=titleCaseString.join(" ")
  }

  sumOfAnyParameter(...numbers:number[]){
    const resultSum=numbers.reduce((a,b)=>a+b,0)
    alert("result is "+resultSum)

  }
  incrementButton1Counter(){
    this.counter1=this.counter1+1
  }
  incrementButton2Counter(){
    this.counter2=this.counter2+1
  }
  findDataType(value:any){
    if(Array.isArray(value)){
      console.log("Array")
    }
    else{
      console.log(typeof value)
    }
    
  }
  checkSameValue(value1:any,value2:any):boolean{
    if(value1===value2){
      return true
    }
    return false
  }
  checkIsNumber(value:string){
    // console.log(parseInt(value))
    // console.log(Number(value))
    const numberedValue:number= Number(value)
    return !isNaN(numberedValue)
  }
  addNumbers(num1:any,num2:any){
    const numberedNum1 = Number(num1)
    const numberedNum12 = Number(num2)
    if(!isNaN(numberedNum1)&&(!isNaN(numberedNum1))){
      return numberedNum1+numberedNum12
    }
    else{
      return "Number Not Found"
    }
  }
  arrayOfWords(sentence:any){
    if(typeof sentence === "string"){
      console.log(sentence.split(" "))
    }
    else{
      alert("NO String Found")
    }
  }

}

import { Component, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Highlight } from '../../shared/directives/highlight';

@Component({
  imports: [FormsModule,Highlight],
  selector: 'app-signal-basic',
  styleUrl: './signal-basic.css',
  templateUrl: './signal-basic.html',
})
export class SignalBasic {
  productName:string="Mobile"
  productPrice=signal<number>(12500)
  isProductActive=signal(false)
  techName:WritableSignal<string>=signal<string>("")
  cityList=signal<string[]>(['Pune','Noida', 'Sonipat'])
  cityName:string=""
  counter=signal<number>(0)
  student= signal<any>({
    studentName:'Joe',
    studentCity:'Pune'
  })
  constructor(){
    setTimeout(()=>{
      // this.productName="Laptop"
      // this.productPrice.set(15000)
      // this.cityList().push("Thane")
      this.cityList.update(oldCityList=>[...oldCityList,"Banglore"])
    },3000)
    // this.productName="Laptop"
  }
  onChange(){
    setTimeout(()=>{
      this.productName="Headphones"
    },3000)
  }
  setTechName(tech:string){
    this.techName.set(tech)
  }
  addCity(){
    this.cityList().push(this.cityName)

    // const previousCities=this.cityList()
    // previousCities.push(this.cityName)
    // this.cityList.set(previousCities)
    // this.cityList.set([this.cityName,...previousCities])
    // this.cityList.update(oldvalue=>[this.cityName,...oldvalue])
    
  }
  onDecrement(){
    this.counter.update(oldValue=>oldValue-1)
  }
  onIncrement(){
    this.counter.update(oldValue=>oldValue+1)
  }
  changeName(){
    this.student.update(oldValue=>({...oldValue,studentName:'Rahul'}))
  }
}

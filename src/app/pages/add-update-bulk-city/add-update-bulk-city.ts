import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-add-update-bulk-city',
  styleUrl: './add-update-bulk-city.css',
  templateUrl: './add-update-bulk-city.html',
})
export class AddUpdateBulkCity {
  http = inject(HttpClient)
  cityList=signal<any>([])

  constructor(){
    this.getAllCity()
  }

  addRow(){
    const newCityObj={
      cityId: 0,
      cityName: ""
    }
    this.cityList.update(oldCityList=>[newCityObj,...oldCityList])
  }

  addUpdateBulkCity(){
    this.http.post("https://freeapi.gerasim.in/api/FlightBooking/AddUpdateBulkCity",this.cityList()).subscribe({
      next:(res:any)=>{
        if(res.result){
          alert("Cities added successfully")
          this.getAllCity()
        }
        else{
          alert(res.message)
        }
      },
      error:(err:HttpErrorResponse)=>{
        alert("API Error")
      }
    })
  }

  getAllCity(){
    this.http.get("https://freeapi.gerasim.in/api/FlightBooking/GetAllCity").subscribe({
      next:(res:any)=>{
        this.cityList.set(res.data)
      },
      error:(err:HttpErrorResponse)=>{
        alert("API Error")
      }
    })
  }

}

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-get-api',
  styleUrl: './get-api.css',
  templateUrl: './get-api.html',
})
export class GetApi {
  httpClientObj = inject(HttpClient)
  userList:any[]=[]
  todoList=signal<any>([])
  carList= signal<any[]>([])
  constructor(private http:HttpClient){

  }
  getAllUsers(){
    this.httpClientObj.get("https://jsonplaceholder.typicode.com/users").subscribe({
      next:(res:any)=>{
        this.userList=res
      },
      error:(err:HttpErrorResponse)=>{
        alert("API Error")
      }
    })
  }
  getAllTodos(){
    this.http.get("https://jsonplaceholder.typicode.com/todos").subscribe({
      next:(res:any)=>{
        this.todoList.set(res)
      }
    })
  }
  getAllCars(){
    this.http.get("https://freeapi.gerasim.in/api/CarRentalApp/GetCars").subscribe({
      next:(res:any)=>{
        this.carList.set(res.data)
      },
      error:(err:HttpErrorResponse)=>{
        alert("API error")
      }
    })
  }
}

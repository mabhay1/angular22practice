import { JsonPipe, SlicePipe } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  imports: [SlicePipe,FormsModule,JsonPipe],
  selector: 'app-bus-vendor',
  styleUrl: './bus-vendor.css',
  templateUrl: './bus-vendor.html',
})
export class BusVendor {
  http=inject(HttpClient)
  vendorObj={
    vendorId: 0,
    vendorName: "",
    contactNo: "",
    emailId: ""  
  }
  vendorList:WritableSignal<any[]>=signal<any[]>([])
  loader:WritableSignal<boolean>=signal<boolean>(false)
  isSubmit=false
  constructor(){
    this.getAllVendors()
  }
  getAllVendors(){
    this.loader.set(true)
    this.http.get("https://projectapi.gerasim.in/api/BusBooking/GetBusVendors").subscribe({
      next:(res:any)=>{
        this.loader.set(false)
        this.vendorList.set(res)
      },
      error:(err:HttpErrorResponse)=>{
        this.loader.set(false)
        alert("API Error")
      }
    })
  }
  onEdit(obj:any){
    const stringObj=JSON.stringify(obj)
    const newObj=JSON.parse(stringObj)
    this.vendorObj=newObj
  }
  onDelete(id:number){
    const isConfirm=confirm("Are you sure you want to delete!!")
    if(isConfirm){
      this.http.delete("https://projectapi.gerasim.in/api/BusBooking/DeleteBusVendor?id="+id).subscribe({
        next:(res:any)=>{
          alert("Deleted Success")
          this.getAllVendors()
        },
        error:(err:HttpErrorResponse)=>{
          alert("API Error")
        }
      })
    }
  }
  onReset() {
    this.vendorObj = {
      vendorId: 0,
      vendorName: "",
      contactNo: "",
      emailId: ""
    }
  }
  onSaveVendor(formUser:NgForm){
    this.isSubmit=true
    if(formUser.valid){
    this.http.post("https://projectapi.gerasim.in/api/BusBooking/PostBusVendor",this.vendorObj).subscribe({
      next:(res:any)=>{
        alert("Vendor created successfully")
        this.onReset()
        this.getAllVendors()
      },
      error:(err:HttpErrorResponse)=>{
        alert("API Error")
      }
    })
  }
  }
  onUpdateVendor(){
    this.http.put("https://projectapi.gerasim.in/api/BusBooking/PutBusVendors?id="+this.vendorObj.vendorId,this.vendorObj).subscribe({
      next:(res:any)=>{
        alert("Updated Successfully")
        this.onReset()
        this.getAllVendors()
      },
      error:(err:HttpErrorResponse)=>{
        alert("API Error")
      }
    })
  }
}

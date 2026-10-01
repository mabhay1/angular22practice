import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomAlert } from '../../shared/reusableComponent/custom-alert/custom-alert';
import { CustomTable } from '../../shared/reusableComponent/custom-table/custom-table';
import { FormatCardNumberPipe } from '../../shared/pipes/format-card-number-pipe';
import { map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { CustomListGroup } from '../../shared/reusableComponent/custom-list-group/custom-list-group';

@Component({
  imports: [FormsModule, CustomAlert, CustomTable, FormatCardNumberPipe, AsyncPipe, CustomListGroup],
  selector: 'app-enquiry',
  styleUrl: './enquiry.css',
  templateUrl: './enquiry.html',
})
export class Enquiry implements OnInit {
  categoryList=signal<any[]>([])
  statusList=signal<any[]>([])
  loader:WritableSignal<boolean>=signal<boolean>(false)
  enquiryObj = {
    enquiryId: 0,
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    message: "",
    categoryId: 0,
    statusId: 0,
    enquiryType: "",
    isConverted: false,
    enquiryDate: "",
    followUpDate: "",
    feedback: ""
  }
  enquiryList=signal<any[]>([])
  columList:any[]=[
    {keyName: 'customerName',columnName: 'Customer'},
    {keyName:'customerPhone',columnName:'Contact'},
    {keyName:'enquiryType',columnName:'Enquiry Type'},
    {keyName:'statusId',columnName:'Status'},
    {keyName:'categoryId',columnName:'Category'}
  ]
  cardNumber:string='1111222233334646'
  categoryListObs$:Observable<any[]>= new Observable<any[]>()
  statusListObs$=new Observable<any[]>()
  roleList:string[]=['Admin','Guest','User','SuperAdmin']
  documentList:string[]=['Adhar Card','Pan Card','Driving Licence','Voter Card']
  selectedRole:string='Guest'
  selectedDocument:string="Driving Licence"
  constructor(private http:HttpClient){

  }
  ngOnInit(): void {
    // this.getAllCategory()
    // this.getAllStatus()
    this.categoryListObs$=this.http.get<any[]>("https://api.freeprojectapi.com/api/Enquiry/get-categories").pipe(
      map((res:any)=>res.data)
    )
    this.statusListObs$=this.http.get<any[]>("https://api.freeprojectapi.com/api/Enquiry/get-statuses").pipe(
      map((res:any)=>res.data)
    )
    this.getAllEnquiry()
  }
  setSelectedRole(role:string){
    this.selectedRole=role
  }
  setSelectedDocument(document:string){
    this.selectedDocument=document
  }
  getAllCategory(){
    this.http.get("https://api.freeprojectapi.com/api/Enquiry/get-categories").subscribe({
      next:(res:any)=>{
        if(res.result){
          this.categoryList.set(res.data)
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
  getAllStatus(){
    this.http.get("https://api.freeprojectapi.com/api/Enquiry/get-statuses").subscribe({
      next:(res:any)=>{
        if(res.result){
          this.statusList.set(res.data)
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
  getAllEnquiry(){
    this.loader.set(true)
    this.http.get("https://api.freeprojectapi.com/api/Enquiry/get-enquiries").subscribe({
      next:(res:any)=>{
        this.loader.set(false)
        if(res.result){
          this.enquiryList.set(res.data)
        }
        else{
          alert(res.message)
        }
      },
      error:(err:HttpErrorResponse)=>{
        this.loader.set(false)
        alert("API Error")
      }
    })
  }
  // onEdit(enqObj:any){
  //   this.enquiryObj={...enqObj}
  // }
  // onDelete(id:number){
  //   const isConfirm=confirm("Are you sure you want to delete")
  //   if(isConfirm){
  //     this.http.delete("https://api.freeprojectapi.com/api/Enquiry/delete-enquiry/"+id).subscribe({
  //       next:(res:any)=>{
  //         if(res.result){
  //           alert("Deleted Success")
  //           this.getAllEnquiry()
  //         }
  //         else{
  //           alert(res.message)
  //         }
  //       },
  //       error:(err:HttpErrorResponse)=>{
  //         alert("API Error")
  //       }
  //     })
  //   }
  // }
  onEnquiryEdit(event:any){
    this.enquiryObj=structuredClone(event)
  }
  onDeleteEnquiry(event:any){
    const id=event.enquiryId
    const isConfirm=confirm("Are you sure you want to delete")
    if(isConfirm){
      this.http.delete("https://api.freeprojectapi.com/api/Enquiry/delete-enquiry/"+id).subscribe({
        next:(res:any)=>{
          if(res.result){
            alert("Deleted Success")
            this.getAllEnquiry()
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
  }
  onResetEnquiry() {
    debugger
    this.enquiryObj = {
      enquiryId: 0,
      customerName: "",
      customerEmail: "",
      customerPhone: "",
      message: "",
      categoryId: 0,
      statusId: 0,
      enquiryType: "",
      isConverted: false,
      enquiryDate: "",
      followUpDate: "",
      feedback: ""
    }
  }
  onSaveEnquiry(){
    this.http.post("https://api.freeprojectapi.com/api/Enquiry/create-enquiry",this.enquiryObj).subscribe({
      next:(res:any)=>{
        debugger
        if(res.result){
          alert("Enquiry created success")
          this.onResetEnquiry()
          this.getAllEnquiry()
        }
        else{
          alert(res.message)
        }
      },
      error:(err:HttpErrorResponse)=>{
        debugger
        alert("API Error")
      }
    })
  }
  onUpdateEnquiry(){
    this.http.put("https://api.freeprojectapi.com/api/Enquiry/update-enquiry/"+this.enquiryObj.enquiryId,this.enquiryObj).subscribe({
      next:(res:any)=>{
        if(res.result){
          alert("Updated Success")
          this.onResetEnquiry()
          this.getAllEnquiry()
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

}

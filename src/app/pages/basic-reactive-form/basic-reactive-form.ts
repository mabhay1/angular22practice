import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BankUser, IApiResponse, IBankUserList } from '../../models/interface/BankUser.model';
import { BankUserService } from '../../services/bank-user-service';
import { HttpErrorResponse } from '@angular/common/http';
import { finalize, map } from 'rxjs';
import { DisableCopyPaste } from '../../shared/directives/disable-copy-paste';
import { ToolTipDir } from '../../shared/directives/tool-tip-dir';
import { FocusDirective } from '../../shared/directives/focus-directive';

@Component({
  imports: [ReactiveFormsModule,DisableCopyPaste, ToolTipDir, FocusDirective],
  selector: 'app-basic-reactive-form',
  styleUrl: './basic-reactive-form.css',
  templateUrl: './basic-reactive-form.html',
})
export class BasicReactiveForm implements OnInit{
  userForm!:FormGroup;
  bankUserSrv=inject(BankUserService)
  userList=signal<IBankUserList[]>([])
  isSubmit:boolean=false
  loading=signal<boolean>(false)
  bankUserObj!:IBankUserList
  constructor(){
    this.initializeForm()
  }
  ngOnInit(): void {
    this.getAllBankUsers()
  }
  initializeForm(){
    this.userForm = new FormGroup({
      userId: new FormControl(0),
      userName: new FormControl("",[Validators.required,Validators.minLength(3)]),
      emailId: new FormControl("",[Validators.required,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]),
      fullName: new FormControl("",[Validators.required,Validators.minLength(4)]),
      password: new FormControl("",[Validators.required])
    })
  }
  getAllBankUsers(){
    this.loading.set(true)
    this.bankUserSrv.getAllBankUsers().pipe(
        finalize(()=>{
          this.loading.set(false)
        })
      ).subscribe({
      next:(res:IApiResponse)=>{
        if(res.result){
          this.userList.set(res.data)
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
  onEdit(userObj:IBankUserList){
    this.bankUserObj=structuredClone(userObj)
    this.userForm.patchValue(this.bankUserObj)
  }
  onReset(){
    this.userForm.reset({
      userId: 0,
      userName: "",
      emailId: "",
      fullName: "",
      password: ""
    })
  }
  onSaveForm() {
    this.isSubmit=true
    const formData: BankUser = this.userForm.value
    if (this.userForm.valid) {
      this.bankUserSrv.registerBankUser(formData).subscribe({
        next: (res: IApiResponse) => {
          if (res.result) {
            this.getAllBankUsers()
          }
          alert(res.message)
        },
        error: (err: HttpErrorResponse) => {
          alert("API Error")
        }
      })
    }
  }
  onUpdateForm() {
    this.isSubmit=true
    const formData =this.userForm.value
    formData.role= this.bankUserObj.role,
    formData.createdDate= this.bankUserObj.createdDate,
    formData.projectName= this.bankUserObj.projectName,
    formData.refreshToken= this.bankUserObj.refreshToken,
    formData.refreshTokenExpiryTime=this.bankUserObj.refreshTokenExpiryTime
    console.log(formData)
    if (this.userForm.valid) {
      this.bankUserSrv.updateUser(formData).subscribe({
        next: (res: IApiResponse) => {
          if (res.result) {
            this.getAllBankUsers()
          }
          alert(res.message)
        },
        error: (err: HttpErrorResponse) => {
          alert("API Error")
        }
      })
    }
  }

  

}

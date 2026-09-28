import { Component, inject, OnInit, signal } from '@angular/core';
import { EmployeeModel } from '../../models/class/Employee.model';
import { form, FormField, minLength, required, schema } from '@angular/forms/signals';
import { AsyncPipe } from '@angular/common';
import { map, Observable } from 'rxjs';
import { EmployeeService } from '../../services/employee-service';
import { IApiResponse } from '../../models/interface/BankUser.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  imports: [FormField,AsyncPipe],
  selector: 'app-basic-signal-form',
  styleUrl: './basic-signal-form.css',
  templateUrl: './basic-signal-form.html',
})
export class BasicSignalForm implements OnInit {
  employeeObj=signal<EmployeeModel>(new EmployeeModel())
  employeeSrv=inject(EmployeeService)
  childDept$= new Observable<any[]>()
  employeeList=signal<EmployeeModel[]>([])


  employeeForm=form(this.employeeObj,(schema)=>{
    required(schema.employeeName,{message:'Name is required'})
    minLength(schema.employeeName,3,{message:'Minumum 3 character required'})
  })

  ngOnInit(): void {
    this.childDept$=this.employeeSrv.getChildDepartment().pipe(
      map((res:IApiResponse)=>res.data)
    )
    this.getAllEmployee()
  }
  getAllEmployee(){
    this.employeeSrv.getAllEmployee().subscribe({
      next:(res:EmployeeModel[])=>{
        this.employeeList.set(res)
      }
    })
  }

  onSubmit(){
    const formValue=this.employeeForm().value()
    debugger
    this.employeeSrv.createEmployee(formValue).subscribe({
      next:(res:any)=>{
        alert("employee created")
        this.getAllEmployee()
        debugger
      },
      error:(err:HttpErrorResponse)=>{
        debugger
      }
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-crud-local-storage',
  styleUrl: './crud-local-storage.css',
  templateUrl: './crud-local-storage.html',
})
export class CrudLocalStorage implements OnInit {
  employeeForm!:FormGroup
  employeeList:IEmployee[]=[]
  filteredList:IEmployee[]=[]
  isEmpFormVisible:boolean=false
  constructor(private fb:FormBuilder){
    this.initializeForm()
  }
  ngOnInit(): void {
    this.getEmployee()
  }
  initializeForm(){
    this.employeeForm = this.fb.group({
      empId:[0],
      empName:[''],
      empEmail:[''],
      empPhone:[''],
      city:[''],
      state:['']
    })
  }
  getEmployee(){
    const localData=localStorage.getItem('EmpData')
    if(localData!==null){
      this.employeeList=JSON.parse(localData)
      this.filteredList=this.employeeList
    }
  }
  onSearch(event:any){
    const searchValue=event.target.value
    if(searchValue){
      // this.filteredList=this.employeeList.filter(x=>{
      //   for(let i of Object.values(x)){
      //     if(String(i).toLowerCase().includes(searchValue.toLowerCase())){
      //       return true
      //     }
      //   }
      //   return false
      // })
      this.filteredList=this.employeeList.filter(q=>{
        return Object.values(q).some(m=>String(m).toLowerCase().includes(searchValue.toLowerCase()))
      })
      console.log("filteredlist",this.filteredList)
      console.log("actuallist",this.employeeList)
    }
    else{
      this.filteredList=this.employeeList
    }
  }
  onEdit(empObj:IEmployee){
    this.employeeForm.setValue(empObj)
    this.isEmpFormVisible=true
  }
  onDelete(id:number){
    const isDelete=confirm("Are you sure you want to delete")
    if(isDelete){
      const employeeIndex = this.employeeList.findIndex(x=>x.empId===id)
      if(employeeIndex!==-1){
        this.employeeList.splice(employeeIndex,1)
        this.updateLocalstorage()
      }
      else{
        alert("Element does not exist")
      }
    }
  }
  updateLocalstorage(){
    localStorage.setItem('EmpData',JSON.stringify(this.employeeList))
    this.filteredList=this.employeeList
  }
  onReset(){
    this.employeeForm.reset({
      empId:0,
      empName:'',
      empEmail:'',
      empPhone:''
    })
  }
  onSave(){
    const formValue=this.employeeForm.value as IEmployee
    const singleEmployee=this.employeeList.find(x=>x.empEmail===formValue.empEmail)
    if(singleEmployee===undefined){
      const uniqueValue=Math.random()
      formValue.empId=this.employeeList.length+uniqueValue
      this.employeeList.unshift(formValue)
      this.onReset()
      this.updateLocalstorage()
      this.isEmpFormVisible=false
    }
    else{
      alert("Employee Already exists")
    }

  }
  onUpdate(){
    const formValue=this.employeeForm.value as IEmployee
    const singleEmployee=this.employeeList.find(x=>x.empId===formValue.empId)
    if(singleEmployee!==undefined){
      singleEmployee.empName=formValue.empName
      singleEmployee.empEmail=formValue.empEmail
      singleEmployee.empPhone=formValue.empPhone
      singleEmployee.city=formValue.city
      singleEmployee.state=formValue.state
      this.updateLocalstorage()
      this.onReset()
      // this.isEmpFormVisible=false
    }
    else{
      alert("Employee does not exist")
    }
  }
}

interface IEmployee{
    empId:number,
    empName:string,
    empEmail:string,
    empPhone:string,
    city:string,
    state:string
}

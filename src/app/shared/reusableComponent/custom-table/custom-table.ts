import { JsonPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  imports: [JsonPipe],
  selector: 'app-custom-table',
  styleUrl: './custom-table.css',
  templateUrl: './custom-table.html',
})
export class CustomTable {
  @Input() columnArray:any[] = [
    {keyName: 'name',columnName: 'Name'},
    {keyName:'age',columnName:'Age'},
    {keyName:'role',columnName:'Role'}
  ]
  @Input() tableData:any[] = [
    { name: 'Rahul', age:24, role: 'Doctor' },
    { name: 'Amit',age:26, role: 'Nurse' },
    { name: 'Priya',age:27, role: 'Receptionist' }
  ]
  @Input() showLoader =false
  @Output() onEdit:EventEmitter<any>=new EventEmitter<any>()
  @Output() onDelete:EventEmitter<any>=new EventEmitter<any>()

  EditClicked(obj:any){
    this.onEdit.emit(obj)
  }
  DeleteClicked(obj:any){
    this.onDelete.emit(obj)
  }
}

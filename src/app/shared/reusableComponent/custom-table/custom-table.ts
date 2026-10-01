import { NgClass, SlicePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomButton } from '../custom-button/custom-button';
import { NaPipe } from '../../pipes/na-pipe';

@Component({
  imports: [FormsModule, NgClass, SlicePipe, CustomButton, NaPipe],
  selector: 'app-custom-table',
  styleUrl: './custom-table.css',
  templateUrl: './custom-table.html',
})
export class CustomTable implements OnChanges {
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
  pageSize:number=60
  totalPages:number=0
  filteredData:any[]=[]
  pageArray:any[]=[]
  currentPage:number=0
  startPageIndex:number=0
  endIndexPage:number=this.startPageIndex+5
  ngOnChanges(changes: SimpleChanges): void {
    this.onPageSizeChange()
  }
  getPageData(pageNo:number){
    this.currentPage=pageNo
    this.filteredData=this.tableData.slice((pageNo-1)*this.pageSize,pageNo*this.pageSize)
  }
  onPageSizeChange(){
    this.startPageIndex=0
    this.endIndexPage=this.startPageIndex+5
    this.totalPages=Math.ceil(this.tableData.length/this.pageSize)
    this.pageArray=[]
    for(let i=1;i<=this.totalPages;i++){
      this.pageArray.push(i)
    }
    this.getPageData(1)
  }

  EditClicked(obj:any){
    this.onEdit.emit(obj)
  }
  DeleteClicked(obj:any){
    this.onDelete.emit(obj)
  }
  onNext(){
    if(this.currentPage!==this.pageArray.length){
      this.currentPage=this.currentPage+1
      this.getPageData(this.currentPage)
    }
    if(this.currentPage>this.endIndexPage){
      this.startPageIndex=this.startPageIndex+5
      this.endIndexPage=this.endIndexPage+5
    }
  }
  onPrevious(){
    if(this.currentPage!==1){
      this.currentPage=this.currentPage-1
      this.getPageData(this.currentPage)
    }
    if(this.currentPage===this.startPageIndex){
      this.startPageIndex=this.startPageIndex-5
      this.endIndexPage=this.endIndexPage-5
    }
  }
}

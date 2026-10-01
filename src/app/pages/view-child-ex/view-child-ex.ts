import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CustomAlert } from '../../shared/reusableComponent/custom-alert/custom-alert';
import { ProgressBar } from '../../shared/reusableComponent/progress-bar/progress-bar';

@Component({
  imports: [CustomAlert, ProgressBar],
  selector: 'app-view-child-ex',
  styleUrl: './view-child-ex.css',
  templateUrl: './view-child-ex.html',
})
export class ViewChildEx implements OnInit,AfterViewInit {
  @ViewChild('courseNameTem') courseTextElement!:ElementRef
  @ViewChild('myDivTem') myDivElememnt!:ElementRef
  @ViewChild(CustomAlert) alertComponent!:CustomAlert
  @ViewChild(ProgressBar) progressBarComp!:ProgressBar
  ngOnInit(): void {
    // this.courseTextElement.nativeElement.value="Dot Net"
  }
  ngAfterViewInit(): void {
    // this.courseTextElement.nativeElement.value="Dot Net"
  }
  readCourseName(){
   const course= this.courseTextElement.nativeElement.value
   alert(course)
  }
  setJava(){
    this.courseTextElement.nativeElement.value="Java"
  }
  addDivColor(color:string){
    this.myDivElememnt.nativeElement.style.backgroundColor=color
  }
  readData(){
    const alertMessage=this.alertComponent.alertMessage
    const progressValue=this.progressBarComp.progress
    alert(`alertMessage= ${alertMessage}
            progressValue= ${progressValue}`)  
            
    this.progressBarComp.newVariable="Abhay"
    this.progressBarComp.newSignal.set("Angular")
  }
}

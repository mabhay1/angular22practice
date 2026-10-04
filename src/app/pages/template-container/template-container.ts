import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { finalize } from 'rxjs';

@Component({
  imports: [NgIf, NgFor, NgTemplateOutlet],
  selector: 'app-template-container',
  styleUrl: './template-container.css',
  templateUrl: './template-container.html',
})
export class TemplateContainer implements OnInit {
  isDiv1Visible:boolean=true
  cityList:string[]=['Pune','Sonipat','Noida','Delhi']
  http=inject(HttpClient)
  photoList=signal<any[]>([])
  isloading=signal<boolean>(false)

  ngOnInit(): void {
    this.getAllPhotos()
  }
  getAllPhotos(){
    this.isloading.set(true)
    this.http.get("https://jsonplaceholder.typicode.com/photos").pipe(
      finalize(()=>{
        this.isloading.set(false)
      })
    ).subscribe({
      next:(res:any)=>{
        this.photoList.set(res)
      }
    })
  }
}

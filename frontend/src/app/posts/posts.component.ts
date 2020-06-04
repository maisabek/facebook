import { Component, OnInit,ElementRef } from '@angular/core';
import { userData } from '../model/userData';
import {FaceservicesService} from '../services/faceservices.service'
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
   userData:userData=new userData();
   public postcont=this.userData.postcontent;
  constructor(private _elementRef:ElementRef,private FaceservicesService:FaceservicesService) {
    
   }
  submitted:boolean=false;
  ngOnInit() {
    console.log("nm"+this.userData.postcontent)
  }
  ngAfterViewInit(){
    var query=document.createElement('script');
    query.src='./assets/js/custom.js';
    this._elementRef.nativeElement.appendChild(query);

  }
 
}

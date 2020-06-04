import { Component, OnInit,ElementRef } from '@angular/core';
import *  as $ from "jquery";
import { userData } from '../model/userData';
import {FaceservicesService} from '../services/faceservices.service'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  userData:userData=new userData();
  submitted:boolean=false;
  constructor(private elementRef:ElementRef,private FaceservicesService:FaceservicesService) { }
  ngOnInit() {}
  ngAfterViewInit(){
    var jquery=document.createElement('script');
    jquery.type='text/javascript';
    jquery.src='./assets/js/custom.js';
    this.elementRef.nativeElement.appendChild(jquery);
  }
  saveData(){
    const data={
      postcontent:this.userData.postcontent,
      imgurl:this.userData.imgurl
    };
    console.log(data);
    this.FaceservicesService.createuserData(data).subscribe(
     response => {
      this.submitted = true;
        console.log(response);
     }
     );
  }
   newTut(){
    this.submitted = false;
     this.userData={
      postcontent:'',
      imgurl:'',
      
     
     };
   }
}


import { Component, OnInit, ElementRef} from '@angular/core';
import {FaceservicesService} from '../services/faceservices.service';
import {HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { userData } from '../model/userData';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {
  userData:userData=new userData();
  constructor(private _elementRef:ElementRef,private FaceservicesService:FaceservicesService,private httpClient: HttpClient) { }
  ngOnInit() {console.log(this.userData.imgurl)}
  url="./assets/images/xx.jpg";
  onselectFile(e){
    if(e.target.files){
      var reader=new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.url=event.target.result;

      }
    }
  }
  CoverImageUrl="./assets/images/xx.jpg";
  onselectCoverImage(e){
    if(e.target.files){
      var reader=new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.CoverImageUrl=event.target.result;
      }
    }
  }

  ngAfterViewInit(){
    var query=document.createElement('script');
    query.src='./assets/js/custom.js';
    this._elementRef.nativeElement.appendChild(query);
  }

  
    
    }

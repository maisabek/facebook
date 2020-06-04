import { Injectable } from '@angular/core';
import {HttpClient,HttpRequest, HttpHeaders, HttpEvent} from '@angular/common/http';
import  {observable,Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FaceservicesService {
  private BaseUrl='http://localhost:8083';
  constructor(public http:HttpClient) {}
   getAll(): Observable<any>{
    return this.http.get<any>('http://localhost:8083/api/all')
   }
  
   createuser(data){
    return this.http.post<any>(this.BaseUrl+'/api/create', data);
   }
   createuserData(data){
    return this.http.post<any>(this.BaseUrl+'/api/userData', data);
   }

   


}

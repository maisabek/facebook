import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {user} from './user';
import {FaceservicesService} from '../services/faceservices.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 contactsForm=new FormGroup({
    userEmail:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z]/)])
  });
  messageContainer:any[]=[];
  public passw;
   message={
    email:this.contactsForm.controls.userEmail.value,
    password:this.contactsForm.controls.password.value,
  }
saveform(){
   let message={
     email:this.contactsForm.controls.userEmail.value,
     password:this.contactsForm.controls.password.value,
   }
  this.messageContainer.push(message);
  console.log("passw"+message.password);

}
newuser:user=new user();
submitted=false;
userName ='';
password = '';
public username;
public pass;
smartphone: any = [];
flag:boolean=false;
public days=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17"];
public month=["jan","feb","mars","april","may","jun","jul","aug","sep","oct","nov","dec"];
public years=["1990","1991","1992","1993","1994","1995","1996","1997","1998","1999","2000"]
constructor(private route:Router,private FaceservicesService:FaceservicesService){}
ngOnInit(){
  console.log(this.userName+` password -`+this.password);
}
saveData(){
  const data={
    fname:this.newuser.fname,
    lname:this.newuser.lname,
    email:this.newuser.email,
    password:this.newuser.password,
    // days:this.newuser.days,
    // month:this.newuser.mon,
    // years:this.newuser.years,
    // gender:this.newuser.gender
  };
  console.log(data);
  this.FaceservicesService.createuser(data).subscribe(
   response => {
    this.submitted = true;
      console.log(response);
   }
   );
}
 newTut(){
  this.submitted = false;
   this.newuser={
     fname:'',
     lname:'',
     email:'',
     password:'',
    //  days:'',
    //  mon:'',
    //  years:'',
    //  gender:''
   };
 }
registeredUser(){
 let {userName,password} = this;
 this.FaceservicesService.getAll().subscribe(data=> {
        for (const d of (data as any)) {
          this.smartphone.push({
            userName: d.userName,
            password: d.password
      });
      this.username=d.email;
      this.pass=d.password;
      if(userName==this.username && password == this.pass){
        console.log(userName+' password -'+password);
        console.log("userName="+this.username);
        console.log("password="+this.pass);
        this.flag=true;
        break;
     }else{
      this.flag=false;
       continue;
     }
        }
        if(this.flag == true){
          this.route.navigate(['/home']);
        }else{
          alert("authentication faild");
          console.log(this.flag)
          console.log(this.smartphone);
        }
       
      });
}
}


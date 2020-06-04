import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {HomeComponent} from './home/home.component';
import {UserComponent} from './user/user.component';

const routes: Routes = [
  {path:'',component:RegisterComponent},
  {path:'register',component:RegisterComponent},
//  {path:'',redirectTo:'/introduction',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'user',component:UserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostsComponent } from './posts/posts.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import {HttpClientModule} from '@angular/common/http';
import {FaceservicesService} from './services/faceservices.service';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    DashboardComponent,
    HomeComponent,
    NavbarComponent,
    PostsComponent,
    RegisterComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FaceservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

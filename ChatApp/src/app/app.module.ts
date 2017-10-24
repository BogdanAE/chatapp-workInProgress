import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './header/login/login.component';
import { SignupComponent } from './header/signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import { TopicComponent } from './topic/topic.component';
import { TopicElementComponent } from './topic/topic-element/topic-element.component';
import { TopicService } from './topic/topic.service';
import { ChatWindowComponent } from './main/chat-window/chat-window.component';
import { ChatRoomComponent } from './main/chat-window/chat-room/chat-room.component';
import { TopicElementService } from './topic/topic-element/topic-element.service';
import { UserService } from './header/user.service';


const appRoutes: Routes = [ 
  { path: '', component: MainComponent },
  { path:'login', component: LoginComponent },
  { path:'signup', component: SignupComponent },
  { path:'topic', component: TopicComponent },
  { path:'topic/:topic', component: TopicElementComponent },
  { path:'topic/answer/:id', component: ChatRoomComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    TopicComponent,
    TopicElementComponent,
    ChatWindowComponent,
    ChatRoomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    AngularFontAwesomeModule
  ],
  providers: [TopicService, TopicElementService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

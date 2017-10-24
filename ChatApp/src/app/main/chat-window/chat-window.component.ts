import { Component, OnInit, Output, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Topicc } from '../../shared/topic.model';
import { TopicElementService } from '../../topic/topic-element/topic-element.service';
import { UserService } from '../../header/user.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit {

  numberOfPosts;
  shortDateH;
  @Input() isItChanged:string = 'false';
  
  // @Input() topics: Topicc[] = [new Topicc('HARDCODED','HARDCODED')];
  
    @Output() dataT: Topicc;

  constructor(private http: HttpClient,
              private topicElementService: TopicElementService,
              private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      (users: any) => { console.log(users)},
      (error) => {console.log(error)}
    );
  
    this.topicElementService.getPost().subscribe(
      (messages: any) => {console.log(messages)
      this.dataT = messages},
      (error) => {console.log(error)}
    );
  }
   
  // getPosts () {
  //   this.topicElementService.getPost().subscribe(
  //     (data) => {console.log(data)
  //     this.dataT = data},
  //     (error) => {console.log(error)}
      
  //   );
  //   setInterval(this.getPosts(), 1000);
  //   console.log('function called!');
  // }


}

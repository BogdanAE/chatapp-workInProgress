import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

import { Topicc } from '../../../shared/topic.model';
import { TopicElementService } from '../../../topic/topic-element/topic-element.service';


@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {

  @Output() changed = new EventEmitter<string>();
  dataT: Topicc[];
  checkId ;
  responseText: string;
  dateStamp = new Date;
  answer: Topicc = new Topicc('','',this.dateStamp,'');
  rep: number = 0;

  constructor(private http: HttpClient,
              private router: Router,
              private route: ActivatedRoute,
              private topicElementService: TopicElementService ) { }


  ngOnInit() {
    this.topicElementService.getPost().subscribe(
      (data: Topicc[]) => {console.log(data)
      this.dataT = data},
      (error) => {console.log(error)}
    );
    
  }

  onCheckId() {
    this.checkId = this.route.snapshot.params['id'];
    return this.checkId;
    // console.log(this.checkId);
  }


  getAnswerText() {
    this.responseText = (<HTMLInputElement>event.target).value;
  }
 checkAnswerText() {

 }
  onSubmitAnswer() {
    // this.dataT.filter((obj) => { for(let i ; i <= this.dataT.length; i++) {
    //   if(this.dataT[i].response == "#"){
    //     this.answer.response = this.dataT[i].response;
    //     console.log("iaiaiaiaiaiia:" + this.answer.msg)
    //   }
    // }});
    this.answer.response = this.responseText;
    this.answer.date = this.dateStamp;
    this.answer.topic = '';
    this.topicElementService.postAnswer(this.route.snapshot.params['id'], this.answer); 
    this.router.navigate(["/topic/answer",this.route.snapshot.params['id']]);
    this.topicElementService.reload = true;
    console.log(this.responseText);
    console.log(this.route.snapshot.params['id']);
  }

  onDeleteTopic() {
    this.topicElementService.deletePost(this.route.snapshot.params['id']);
    console.log(this.route.snapshot.params['id'])
    this.router.navigate(['/']);
  }

  addRep() {
    this.rep++;
  }

  minusRep() {
    if(this.rep >= 1){
      this.rep--;
    }
  }
}

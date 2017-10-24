import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { TopicService } from '../topic.service';
import { Topicc } from '../../shared/topic.model';
import { TopicElementService } from './topic-element.service';

@Component({
  selector: 'app-topic-element',
  templateUrl: './topic-element.component.html',
  styleUrls: ['./topic-element.component.css'],
  providers: [TopicElementService]
  
})
export class TopicElementComponent implements OnInit {
  
  topicElementSubmitted = new EventEmitter<Topicc>();
  
 
  constructor(private router: Router, 
              private topicService: TopicService, 
              private topicElementService: TopicElementService, 
              private route: ActivatedRoute
            ) { }
    
    allowSubmit = false;
    message: string;
    tagg: string;
    ifNoTag = this.route.snapshot.params['topic'];
    timeStamp = new Date();
    @Output() topicToBePosted: Topicc = new Topicc('','',this.timeStamp,'');
    
  ngOnInit() {
  }
   
  onTopicMsg(event: Event) {
      this.message = (<HTMLInputElement>event.target).value;
      if(this.message !== null)
      {
        this.allowSubmit = true;
      }
}
  onTopicTag(event: Event) {
    this.tagg = (<HTMLInputElement>event.target).value;
  }

  onLoadText() {
    if(this.tagg === undefined)
    {
      this.tagg = this.ifNoTag;
      console.log(this.ifNoTag);
    }
    this.topicToBePosted.msg = this.message;
    this.topicToBePosted.topic = this.tagg;
    this.topicToBePosted.response = '#';
    this.topicToBePosted.date = this.timeStamp;
    this.topicElementService.reload = true;
    this.topicElementService.storePost(this.topicToBePosted);
    
    this.router.navigate(["/"]);
  }

  
}


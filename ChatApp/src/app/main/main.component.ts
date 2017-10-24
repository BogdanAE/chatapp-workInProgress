import { Component, OnInit, Input, SimpleChanges, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TopicService } from '../topic/topic.service';
import { TopicElementService } from '../topic/topic-element/topic-element.service';
// import { Topicc } from '../shared/topic.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [TopicElementService]
 
})
export class MainComponent implements OnInit {

  //  @Input() topics: Topicc[] = [
  //    new Topicc('Main', 'MTopic'),
  //    new Topicc('Main ', 'MainTopic')
  //   ];
  // @Input() topics: Topicc[] = [new Topicc('HARDCODED','HARDCODED')];

  // dataT: Topicc;
    
  constructor(private topicService: TopicService, 
              private topicElementService: TopicElementService,
              private http: HttpClient
            ) { 
    
  }

  ngOnInit() {
    this.topicElementService.getPost();
  }

  

}

import { EventEmitter, Output } from '@angular/core';

import { Topicc } from '../shared/topic.model';

export class TopicService{

//    @Output() public topics: Topicc[] = [
//         new Topicc('NO NONONONNONO', "don't want this topic"),
//         new Topicc('NO NONONONNONO', "don't want this topic")
// ];

    // @Output() topics: Topicc = new Topicc('TopicSERVICE', 'NU', '');

     topicSubmitted = new EventEmitter<Topicc>();

// getTopic() {

    // return this.topics.slice();
    // this.topicSubmitted.emit(this.topics);
    // return this.topics;

    // }

// addTopic(topic: Topicc) {
//     //  this.topics.push(topic);
//     this.topicSubmitted.emit(this.topics.slice());
    
    
//     }    
}
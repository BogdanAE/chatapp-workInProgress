import 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Output, Input, EventEmitter, Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Response, Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';


import { Topicc } from '../../shared/topic.model';

@Injectable()
export class TopicElementService {
    
    reload = false;
    date = new Date;
    
    constructor(private http: HttpClient,
                private route: ActivatedRoute,
                private router: Router) {}


    storePost(aNewTopic: Topicc) {
        this.http.post('https://nameless-peak-93675.herokuapp.com/messages', aNewTopic).subscribe(
            (response) => {console.log(response)},
            (error) => {console.log(error)}
          );
    }

    deletePost(whatToDelete: string) {
        this.http.delete('https://nameless-peak-93675.herokuapp.com/messages' + '/' + whatToDelete).subscribe(
            (response) => {console.log(response)},
            (error) => {console.log(error)}
          );
    }

    getPost() {
        return this.http.get('https://nameless-peak-93675.herokuapp.com/messages')
        .map(
            (response: Topicc[]) => {
                const data = response;
                for (let index of data){
                    index.msg = "   :  " + index.msg;
                }
                return data;
            }
        );
    }


    postAnswer(whereToAnswer: string, aNewAnswer: Topicc) {
        this.http.patch('https://nameless-peak-93675.herokuapp.com/messages' + '/' + whereToAnswer , aNewAnswer).subscribe(
            (response) => {console.log(response)},
            (error) => {console.log(error)}
          );
    }
}
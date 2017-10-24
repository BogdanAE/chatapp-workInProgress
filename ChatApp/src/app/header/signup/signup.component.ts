import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../user.service';
import { User } from '../../shared/user.model';;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  newUser: User =  new User('admin', "fa fa-reddit-alien", "i'm the administrator", "ep.bogdy@yahoo.com", "1234", this.userService.value);
  
  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
  }
  getUserDescription(event: Event) {
    return this.newUser.description = (<HTMLInputElement>event.target).value;
  }

  getPassword(event: Event) {
    return this.newUser.password = (<HTMLInputElement>event.target).value;
  }

  getEmail(event: Event) {
    return this.newUser.email = (<HTMLInputElement>event.target).value;
  }

  getNickName(event: Event){
    return this.newUser.nickname = (<HTMLInputElement>event.target).value;
  }

  submitCheck() {
    console.log(this.userService.onSignUp(this.newUser));
    this.userService.value = 0;
    this.router.navigate(["/"]);
  }
}

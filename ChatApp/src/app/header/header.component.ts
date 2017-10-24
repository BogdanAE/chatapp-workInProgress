import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   
  // s
  
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  checkUser() {
    return this.userService.value;
  }

  signout() {
    this.userService.value = 1;
  }

  userAvatar() {
    return this.userService.avatar;
  }
  // userNickname() {
  // this.nickname = this.userService.submitCheck();
  // }
}

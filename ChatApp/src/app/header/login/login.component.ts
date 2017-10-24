import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router'; 

import { UserService } from '../user.service'; 
import { User } from '../../shared/user.model';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']

})
export class LoginComponent implements OnInit {

    constructor(private userService: UserService,
                private router: Router) {

    }

    ngOnInit() {
    }


}
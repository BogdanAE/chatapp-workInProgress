import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from '../shared/user.model';

@Injectable()
export class UserService {
    
    value: number = 1;
    avatar: string = "fa fa-reddit-alien";
    password: string;
    email: string;
    logged: string;
    
    
    constructor(private http: HttpClient,
                private route: ActivatedRoute,
                private router: Router) {
    
    }

    onSignUp(newUser: User) {
        this.http.post('https://nameless-peak-93675.herokuapp.com/users', newUser).subscribe(
            (uResponse) => {console.log(uResponse)},
            (error) => {console.log(error)}
        );
    }

    getUsers() {
        return this.http.get('https://nameless-peak-93675.herokuapp.com/users')
        .map(
            (response: User[]) => {
                const data = response;
                return data;
            }
        );
    }
    getPassword(event: Event) {
        this.password = (<HTMLInputElement>event.target).value;
        // console.log(this.password)
        return this.password; 
    }

    getEmail(event: Event) {
        this.email = (<HTMLInputElement>event.target).value;
        return this.email;
    }
    submitCheck() {
        this.getUsers().subscribe(
            (uResponse: User[]) => {
                for(let l = 0 ; l <= uResponse.length - 1 ; l++) {
                    console.log(this.email)
                    console.log(this.password)
                    if(uResponse[l].email === this.email && uResponse[l].password === this.password)
                    {
                        console.log("intra in for")
                        alert("welcome :" + uResponse[l].nickname);
                        this.value = 0;
                        this.logged = uResponse[l].nickname;
                        // return uResponse[l].nickname;
                    }
                    else {
                        console.log('incorect email or password');
                        // return;
                    }
                }
            }
        );   
        this.router.navigate(["/"]); 
      }

}
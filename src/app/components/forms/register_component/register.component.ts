import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../../services/auth_service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  user$: Object;
  loginToken$: string;
  constructor(private data: AuthService, private router: Router) { }

  ngOnInit() {
  }

  register(username, password, email) {
    this.user$ = {
      username: username,
      password: password,
      email:    email
    };
    console.log('Username:' + username + ' email and password: ' + email + ' ' + password);

    this.data.registerUser(this.user$).subscribe();
  }

}

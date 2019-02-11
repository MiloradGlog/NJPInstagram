import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../../services/auth_service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user$: Object;
  loginToken$: string;
  constructor(private data: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(username, password) {
    this.user$ = {
      username: username,
      password: password
    };
    console.log('Login, Username:' + username + ' password:' + password);

    this.data.logInUser(this.user$).subscribe(data => {
        if ((data as any).status === 200) {
          this.loginToken$ = (data as any).headers.get('Authorization');
          localStorage.setItem('token', this.loginToken$);
          localStorage.setItem('user', (this.user$ as any).username);
          console.log(localStorage.getItem('token'));
          setTimeout(() => {
            this.router.navigateByUrl('/posts');
          }, 100);
        } else {
          alert('Bad response at login_component');
        }
      }
    );
  }

}

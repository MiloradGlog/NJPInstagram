import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }


  registerUser(user) {
    this.router.navigateByUrl('/login')
    return this.http.post('http://localhost:8080/users/register', user);
  }

  logInUser(user: any): Observable<any> {
    return this.http.post('http://localhost:8080/login', user, {observe: 'response'});
  }

  isAuthenticated(): boolean {
    return (localStorage.getItem('user') !== null) ? true : false;
  }

  logOutUser(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    alert('User logged out');
    this.router.navigateByUrl('/login');
  }

  redirectToLogin(): void {
    this.router.navigateByUrl('/login');
  }

}

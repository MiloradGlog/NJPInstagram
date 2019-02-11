import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Data} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', localStorage.getItem('token'));
    return this.http.get('http://localhost:8080/users', {headers});
  }

  getUser(username) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', localStorage.getItem('token'));
    return this.http.get('http://localhost:8080/users/getByUsername?username=' + username, {headers});
  }

  getPosts(username) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', localStorage.getItem('token'));
    return this.http.get('http://localhost:8080/posts/get?username=' + username, {headers});
  }

  getFollowing(username) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', localStorage.getItem('token'));
    return this.http.get('http://localhost:8080/users/followers?username=' + username, {headers});
  }

  getFollowers(username) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', localStorage.getItem('token'));
    return this.http.get('http://localhost:8080/users/followers?username=' + username, {headers});
  }

  addPost(txt, url, username) {
    let headers: HttpHeaders = new HttpHeaders();

    headers = headers.append('Authorization', localStorage.getItem('token'));
    return this.http.post('http://localhost:8080/posts/add?username=' + username, {
      text: txt,
      imageURL: url
    }, {headers});
    console.log('addpost');
  }

  follow(srcUsername, trgtUsername) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', localStorage.getItem('token'));
    return this.http.get('http://localhost:8080/users/follow?srcUsername=' + srcUsername + '&trgtUsername=' + trgtUsername,
      {headers});
  }

  checkIsFollowing(srcUsername, trgtUsername) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', localStorage.getItem('token'));
    return this.http.get('http://localhost:8080/users/isFollowing?srcUsername=' + srcUsername + '&trgtUsername=' + trgtUsername,
      {headers});
  }
}

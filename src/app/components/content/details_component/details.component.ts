import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data_service/data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {UsersDialogComponent} from '../../dialogs/users_dialog/users-dialog.component';
import {AddPostDialogComponent} from '../../dialogs/add-post-dialog/add-post-dialog.component';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth_service/auth.service';
import {Alert} from 'selenium-webdriver';
import {FollowersComponent} from '../followers_component/followers.component';
import {FollowersDialogComponent} from '../../dialogs/followers-dialog/followers-dialog.component';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

 // dialogRef: MatDialogRef<UsersDialogComponent>;
  dialogText: string;

  user$: Object;
  private stories = [
    'assets/users/Mile/1550151199121.jpeg',
    'assets/users/Mile/1550151912071.jpeg',
    'assets/users/Mile/1550151931523.png',
    'assets/users/Mile/1550152191236.png'
  ];
  private storyArray = [];

  constructor(private data: DataService,
              private route: ActivatedRoute,
              public dialog: MatDialog,
              private router: Router,
              private auth: AuthService) {
    this.route.params.subscribe( params => this.user$ = params.username );
  }

  ngOnInit() {
    if (!this.auth.isAuthenticated()) {
      this.auth.redirectToLogin();
    }
    this.data.getUser(this.user$).subscribe(
      data => {
        this.user$ = data;

        this.data.getStories((this.user$ as any).username).subscribe(
          response => {
            console.log(response);
            // @ts-ignore
            this.storyArray = response;
          }
        );
      }
    );
  }

  displayFollowers(username): void {
    this.data.getFollowers(username).subscribe( data => {
        const dialogRef = this.dialog.open(FollowersDialogComponent, {
          width: '450px',
          height: '600px'
        });

        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
        });
      }
    );

  }

  follow(trgtUsername): void {
    if (trgtUsername === localStorage.getItem('user')){
      alert('Cannot follow self');
      return;
    }

    this.data.follow(localStorage.getItem('user'), trgtUsername).subscribe(
      data => {
        console.log(data);
      }
    );
  }

  checkFollowing(trgtUsername): void {
    this.data.checkIsFollowing(localStorage.getItem('user'), trgtUsername).subscribe(
      data => {
        console.log(data);
      }
    );
  }




}

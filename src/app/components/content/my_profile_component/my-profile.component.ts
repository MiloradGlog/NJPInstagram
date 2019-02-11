import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../services/data_service/data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {AddPostDialogComponent} from '../../dialogs/add-post-dialog/add-post-dialog.component';
import { AuthService } from '../../../services/auth_service/auth.service';


@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  // dialogRef: MatDialogRef<UsersDialogComponent>;
  dialogText: string;

  user$: Object;
  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private router: Router,
    private auth: AuthService) {

  }

  ngOnInit() {
    if (!this.auth.isAuthenticated()) {
      this.auth.redirectToLogin();
    }
    this.data.getUser(localStorage.getItem('user')).subscribe(
      data => this.user$ = data
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddPostDialogComponent, {
      width: '250px',
      data: {text: this.dialogText}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  logout(): void {
    this.auth.logOutUser();
  }
}

import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd} from '@angular/router';
import {AddPostDialogComponent} from '../dialogs/add-post-dialog/add-post-dialog.component';
import {MatDialog} from '@angular/material';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  currentUrl: string;

  constructor(private router: Router, public dialog: MatDialog) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url !== 'undefined') {
          this.currentUrl = event.url;
        }
        console.log('kliknuto dugme' + this.currentUrl);
      }
    });
  }

  ngOnInit() {
  }

  postNew(): void {
    if (localStorage.getItem('user') === null) {
      this.router.navigateByUrl('/login');
      return;
    }

    const dialogRef = this.dialog.open(AddPostDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }

}

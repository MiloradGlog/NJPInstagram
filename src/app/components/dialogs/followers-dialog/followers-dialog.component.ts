import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DataService} from '../../../services/data_service/data.service';
import {AddPostDialogData} from '../add-post-dialog/add-post-dialog.component';

export interface FollowersDialogData {
  text: string;
}

@Component({
  selector: 'app-followers-dialog',
  templateUrl: './followers-dialog.component.html',
  styleUrls: ['./followers-dialog.component.scss']
})
export class FollowersDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<FollowersDialogComponent>) {}
  ngOnInit() {
  }

}

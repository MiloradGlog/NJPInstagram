import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {DataService} from '../../../services/data_service/data.service';

export interface AddPostDialogData {
  text: string;
}

@Component({
  selector: 'app-add-post-dialog',
  templateUrl: './add-post-dialog.component.html',
  styleUrls: ['./add-post-dialog.component.scss']
})
export class AddPostDialogComponent implements OnInit {

  text: string;
  imageURL: string;
  selectedFile: File;

  constructor(public dialogRef: MatDialogRef<AddPostDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public dialogData: AddPostDialogData, private data: DataService) {}


  ngOnInit() {
    this.selectedFile = null;
  }

  addPost(): void {
    this.data.addPost(this.text, this.imageURL, localStorage.getItem('user')).subscribe();
    close();
  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
    console.log("Selected file:" + this.selectedFile.name);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'frontend-book-dialog',
  templateUrl: './book-dialog.component.html',
  styleUrls: ['./book-dialog.component.scss'],
})
export class BookDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data) {
    console.log(data);
    
  }
}

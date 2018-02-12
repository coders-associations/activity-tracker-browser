import { Component, OnInit } from '@angular/core';
import { NewItemDialogComponent } from '../new-item-dialog/new-item-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-item-new',
  templateUrl: './item-new.component.html',
  styleUrls: ['./item-new.component.scss']
})
export class ItemNewComponent {
    name: string;

    constructor(public dialog: MatDialog) {
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(NewItemDialogComponent, {
            width: '250px',
            data: {name: this.name}
        });

        dialogRef.afterClosed().subscribe(result => {
            this.name = result;
        });
    }

}

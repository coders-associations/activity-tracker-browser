import { Component, OnInit } from '@angular/core';
import {NewItemDialogComponent} from "../new-item-dialog/new-item-dialog.component";
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-item-new',
  templateUrl: './item-new.component.html',
  styleUrls: ['./item-new.component.scss']
})
export class ItemNewComponent implements OnInit {
    name: string;

    constructor(public dialog: MatDialog) {
    }

    ngOnInit() {
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(NewItemDialogComponent, {
            width: '250px',
            data: {name: this.name}
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.name = result;
        });
    }

}

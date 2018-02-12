import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Activity } from '../../models/activity';
import { ActivityDetailsDialogComponent } from '../activity-details-dialog/activity-details-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-item-time',
  templateUrl: './item-time.component.html',
  styleUrls: ['./item-time.component.scss']
})
export class ItemTimeComponent {

    @Input() item: Activity;
    @Output() start = new EventEmitter<any>();
    @Output() stop = new EventEmitter<any>();

    constructor(public dialog: MatDialog) {
    }

    openDialog(): void {
        this.dialog.open(ActivityDetailsDialogComponent, {
            width: '800px',
            data: { item: this.item }
        });
    }
}

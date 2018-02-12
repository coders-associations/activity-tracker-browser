import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Activity } from '../../models/activity';
import { ActivityDetailsDialogComponent } from '../activity-details-dialog/activity-details-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-item-freq',
  templateUrl: './item-freq.component.html',
  styleUrls: ['./item-freq.component.scss']
})
export class ItemFreqComponent {

    @Input() item: Activity;
    @Output() start = new EventEmitter<any>();

    constructor(public dialog: MatDialog) {
    }

    openDialog(): void {
        this.dialog.open(ActivityDetailsDialogComponent, {
            width: '800px',
            data: { item: this.item }
        });
    }
}

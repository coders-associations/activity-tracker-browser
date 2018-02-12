import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatTableDataSource } from '@angular/material';
import { Store } from '@ngrx/store';
import { State } from '../../../store/app.state';
import { DeleteActivityAction } from '../../store/dashboard.actions';

@Component({
  selector: 'app-activity-details-dialog',
  templateUrl: './activity-details-dialog.component.html',
  styleUrls: ['./activity-details-dialog.component.scss']
})
export class ActivityDetailsDialogComponent {

    displayedColumns = ['id', 'start', 'end', 'duration'];
    dataSource = new MatTableDataSource(this.data.item.periods);

    constructor(public dialogRef: MatDialogRef<ActivityDetailsDialogComponent>,
                private store: Store<State>,
                @Inject(MAT_DIALOG_DATA) public data: any) {
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    deleteItem(): void {
        this.store.dispatch(new DeleteActivityAction({ id: this.data.item.id }));
        this.dialogRef.close();
    }
}

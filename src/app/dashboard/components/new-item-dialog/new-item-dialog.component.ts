import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AddActivityAction } from '../../store/dashboard.actions';
import { State } from '../../../store/app.state';
import { Store } from '@ngrx/store';
import { ChooseEventColors } from '../../enums/chooseEventColors';

@Component({
  selector: 'app-new-item-dialog',
  templateUrl: './new-item-dialog.component.html',
  styleUrls: ['./new-item-dialog.component.scss']
})
export class NewItemDialogComponent implements OnInit {
    public form: FormGroup;
    public colors = [];

    constructor(private formBuilder: FormBuilder,
                public dialogRef: MatDialogRef<NewItemDialogComponent>,
                private store: Store<State>,
                @Inject(MAT_DIALOG_DATA) public data: any) {
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            name: [''],
            type: [''],
            color: [''],
        });

        for (const color in ChooseEventColors) {
            if (ChooseEventColors.hasOwnProperty(color)) {
                this.colors.push({
                    color: color,
                    value: ChooseEventColors[color]
                });
            }
        }
    }

    public submit() {
        const activity = {
            name: this.form.get('name').value,
            type: this.form.get('type').value,
            color: this.form.get('color').value,
            row: 1,
            col: this.form.get('type').value === 'time' ? 2 : 1,
        };

        this.store.dispatch(new AddActivityAction({ activity }));

        this.dialogRef.close();
    }
}

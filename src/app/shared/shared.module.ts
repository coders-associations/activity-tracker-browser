import { NgModule} from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatMenuModule,
    MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
    imports: [
        FlexLayoutModule,
        FormsModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatMenuModule,
        ReactiveFormsModule
    ],
    exports: [
        FlexLayoutModule,
        FormsModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatMenuModule,
        ReactiveFormsModule
    ]
})

export class SharedModule { }

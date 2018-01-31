import { NgModule} from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
    MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatPaginatorModule,
    MatProgressSpinnerModule, MatSidenavModule, MatTableModule
} from '@angular/material';
import { MenuComponent } from './components/menu/menu.component';
import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const sharedModules = [
    FlexLayoutModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatSidenavModule,
    HttpClientModule,
    MatPaginatorModule
];

@NgModule({
    declarations: [
        MenuComponent,
        ActionButtonsComponent
    ],
    imports: [
        ...sharedModules,
        RouterModule,
        CommonModule
    ],
    exports: [
        ...sharedModules,
        MenuComponent
    ]
})

export class SharedModule { }

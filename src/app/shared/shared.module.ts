import { NgModule} from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
    MatButtonModule, MatCardModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressSpinnerModule, MatSidenavModule, MatTableModule, MatSelectModule
} from '@angular/material';
import { MenuComponent } from './components/menu/menu.component';
import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';
import { RouterModule } from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthHttpInterceptor} from "../app.interceptor";

const sharedModules = [
    FlexLayoutModule,
    FormsModule,
    MatDialogModule,
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
    MatPaginatorModule,
    MatFormFieldModule,
    MatSelectModule
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
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthHttpInterceptor,
            multi: true
        }
    ]
})

export class SharedModule { }

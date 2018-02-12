import { ModuleWithProviders, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatButtonModule, MatCardModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressSpinnerModule, MatSidenavModule, MatTableModule, MatSelectModule, MatSnackBarModule
} from '@angular/material';

import { MenuComponent } from './components/menu/menu.component';
import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthHttpInterceptor } from '../app.interceptor';
import { CookieService } from 'ngx-cookie-service';

const sharedModules = [
    FlexLayoutModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatSnackBarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSelectModule,
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    RouterModule,
    CommonModule
];

const providers = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthHttpInterceptor,
        multi: true
    },
    CookieService
];

@NgModule({
    declarations: [
        MenuComponent,
        ActionButtonsComponent
    ],
    imports: [
        ...sharedModules
    ],
    exports: [
        ...sharedModules,
        MenuComponent
    ],
    providers: providers
})

export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: providers,
        };
    }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// @angular/flex-layout
import { AuthenticatedGuard } from '../shared/authentication.guard';

// components
import { MyAccountComponent } from './my-account/my-account.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import { SignUpComponent } from './sign-up/sign-up.component';

// routing
import { UsersRoutingModule } from './users-routing.module';
import { modelEffectsModule, modelStoreModule, reducerProvider, initialStateProvider } from './store/index';
import { SharedModule } from '../shared/shared.module';

// components constant
const components = [
    MyAccountComponent,
    SignInComponent,
    SignUpComponent,
    SignOutComponent
];

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule,
        UsersRoutingModule,
        modelStoreModule,
        modelEffectsModule
    ],
    declarations: components,
    exports: components,
    providers: [
        AuthenticatedGuard,
        reducerProvider,
        initialStateProvider
    ]
})
export class UsersModule { }

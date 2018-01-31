import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// @angular/flex-layout
import { AuthenticatedGuard } from '../shared/authentication.guard';

// components
import { MyAccountComponent } from './components/my-account/my-account.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignOutComponent } from './components/sign-out/sign-out.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignComponent } from './components/sign/sign.component';

// routing
import { UsersRoutingModule } from './users-routing.module';
import { modelEffectsModule, modelStoreModule, reducerProvider, initialStateProvider } from './store/index';
import { SharedModule } from '../shared/shared.module';
import { AppConfigModule } from '../app-config.module';

// services
import { UserService } from '../users/services/user.service';

// components constant
const components = [
    MyAccountComponent,
    SignInComponent,
    SignUpComponent,
    SignOutComponent,
    SignComponent
];

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule,
        UsersRoutingModule,
        modelStoreModule,
        modelEffectsModule,
        AppConfigModule
    ],
    declarations: components,
    exports: components,
    providers: [
        AuthenticatedGuard,
        reducerProvider,
        initialStateProvider,
        UserService
    ]
})

export class UsersModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { MyAccountComponent } from './components/my-account/my-account.component';
import { SignOutComponent } from './components/sign-out/sign-out.component';

import { AuthenticatedGuard } from '../shared/authentication.guard';
import { SignComponent } from './components/sign/sign.component';
import { AppConfigModule } from '../app-config.module';

// routes
const routes: Routes = [
    {
        canActivate: [AuthenticatedGuard],
        path: 'my-account',
        component: MyAccountComponent
    },
    {
        path: 'login',
        component: SignComponent
    },
    {
        path: 'sign-out',
        component: SignOutComponent
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(routes),
        AppConfigModule
    ]
})

export class UsersRoutingModule { }

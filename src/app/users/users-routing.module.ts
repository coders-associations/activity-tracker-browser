import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { MyAccountComponent } from './components/my-account/my-account.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignOutComponent } from './components/sign-out/sign-out.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

import { AuthenticatedGuard } from '../shared/authentication.guard';

// routes
const routes: Routes = [
    {
        canActivate: [AuthenticatedGuard],
        path: 'my-account',
        component: MyAccountComponent
    },
    {
        path: 'sign-in',
        component: SignInComponent
    },
    {
        path: 'sign-out',
        component: SignOutComponent
    },
    {
        path: 'sign-up',
        component: SignUpComponent
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class UsersRoutingModule { }

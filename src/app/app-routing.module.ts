import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { NotFoundComponent } from './not-found/not-found.component';
import { LandingPageComponent } from './homepage/components/landing-page/landing-page.component';

const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent
    },
    {
        path: 'users',
        loadChildren: './users/users.module#UsersModule'
    },
    {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
    },
    {
        path: '404',
        component: NotFoundComponent
    },
    {
        path: '**',
        redirectTo: '/404'
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forRoot(routes)
    ]
})

export class AppRoutingModule { }

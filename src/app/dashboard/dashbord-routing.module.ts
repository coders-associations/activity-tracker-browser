import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticatedGuard } from '../shared/authentication.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ActivityGridComponent } from './containers/activity-grid/activity-grid.component';
import { HistoryComponent } from './components/history/history.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { SettingsComponent } from './components/settings/settings.component';

// routes
const routes: Routes = [
    {
        canActivate: [AuthenticatedGuard],
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: 'activities',
                component: ActivityGridComponent
            },
            {
                path: 'history',
                component: HistoryComponent
            },
            {
                path: 'statistics',
                component: StatisticsComponent
            },
            {
                path: 'settings',
                component: SettingsComponent
            },
        ]
    },
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(routes)
    ]
})

export class DashboardRoutingModule { }

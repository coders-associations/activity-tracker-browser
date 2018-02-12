import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthenticatedGuard } from '../shared/authentication.guard';
import { DashboardRoutingModule } from './dashbord-routing.module';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { SharedModule } from '../shared/shared.module';
import { SideNavItemComponent } from './components/side-nav-item/side-nav-item.component';
import { ActivityGridComponent } from './containers/activity-grid/activity-grid.component';
import { HistoryComponent } from './components/history/history.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { SettingsComponent } from './components/settings/settings.component';
import { GridsterModule } from 'angular-gridster2';
import { ItemFreqComponent } from './components/item-freq/item-freq.component';
import { ItemTimeComponent } from './components/item-time/item-time.component';
import { ItemNewComponent } from './components/item-new/item-new.component';
import { ItemSettingsComponent } from './components/item-settings/item-settings.component';
import { initialStateProvider, modelEffectsModule, modelStoreModule, reducerProvider } from './store/index';
import { ActivityService } from './services/activity-service';
import { NewItemDialogComponent } from './components/new-item-dialog/new-item-dialog.component';
import { ActivityDetailsDialogComponent } from './components/activity-details-dialog/activity-details-dialog.component';

@NgModule({
    imports: [
        DashboardRoutingModule,
        SharedModule,
        GridsterModule,
        modelStoreModule,
        modelEffectsModule
    ],
    declarations: [
        DashboardComponent,
        SideNavComponent,
        SideNavItemComponent,
        ActivityGridComponent,
        HistoryComponent,
        StatisticsComponent,
        SettingsComponent,
        ItemFreqComponent,
        ItemTimeComponent,
        ItemNewComponent,
        ItemSettingsComponent,
        NewItemDialogComponent,
        ActivityDetailsDialogComponent
    ],
    entryComponents: [
        NewItemDialogComponent,
        ActivityDetailsDialogComponent
    ],
    providers: [
        AuthenticatedGuard,
        reducerProvider,
        initialStateProvider,
        ActivityService
    ]
})
export class DashboardModule { }

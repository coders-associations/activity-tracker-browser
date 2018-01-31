import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthenticatedGuard } from '../shared/authentication.guard';
import { DashboardRoutingModule } from './dashbord-routing.module';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { SharedModule } from '../shared/shared.module';
import { SideNavItemComponent } from './components/side-nav-item/side-nav-item.component';
import { ActivityGridComponent } from './components/activity-grid/activity-grid.component';
import { HistoryComponent } from './components/history/history.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { SettingsComponent } from './components/settings/settings.component';
import { GridsterModule } from 'angular-gridster2';
import { ItemFreqComponent } from './components/activity-grid/item-freq/item-freq.component';
import { ItemTimeComponent } from './components/activity-grid/item-time/item-time.component';
import { ItemNewComponent } from './components/activity-grid/item-new/item-new.component';
import { ItemSettingsComponent } from './components/activity-grid/item-settings/item-settings.component';
import { initialStateProvider, modelEffectsModule, modelStoreModule, reducerProvider } from './store/index';
import { ActivityService } from './services/activity-service';
import { NewItemDialogComponent } from './components/activity-grid/new-item-dialog/new-item-dialog.component';

@NgModule({
    imports: [
        CommonModule,
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
        NewItemDialogComponent
    ],
    entryComponents: [
        NewItemDialogComponent
    ],
    providers: [
        AuthenticatedGuard,
        reducerProvider,
        initialStateProvider,
        ActivityService
    ]
})
export class DashboardModule { }

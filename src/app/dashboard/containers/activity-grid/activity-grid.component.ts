import { Component, OnInit } from '@angular/core';
import { GridsterConfig } from 'angular-gridster2';
import { getDashboardState } from '../../store/dashboard.reducers';
import { State } from '../../../store/app.state';
import { Store } from '@ngrx/store';
import { Activity } from '../../models/activity';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import {
    GetActivitiesAction, ResetActivityFlagAction, StartActivityAction,
    StopActivityAction
} from '../../store/dashboard.actions';
import * as RouterActions from '@app/store/router.actions';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-activity-grid',
  templateUrl: './activity-grid.component.html',
  styleUrls: ['./activity-grid.component.scss']
})
export class ActivityGridComponent implements OnInit {
    options: GridsterConfig;
    dashboard: Observable<Array<Activity>>;

    addedItem = this.store.select(getDashboardState).pipe(
        map(state => state.activityAdded),
        filter(activityAdded => activityAdded)
    );

    startedItem = this.store.select(getDashboardState).pipe(
        map(state => state.activityStarted),
        filter(activityStarted => activityStarted)
    );

    endedItem = this.store.select(getDashboardState).pipe(
        map(state => state.activityEnded),
        filter(activityEnded => activityEnded)
    );

    constructor(private store: Store<State>, public snackBar: MatSnackBar) {
    }

    ngOnInit() {
        this.options = {
            gridType: 'scrollVertical',
            minCols: 6,
            minRows: 6,
            maxCols: 7,
            fixedRowHeight: 7,
            draggable: {
                enabled: true
            }
        };

        this.store.dispatch(new GetActivitiesAction());

        this.dashboard = this.store.select(getDashboardState).pipe(map(state => state.activities));

        this.addedItem.subscribe(
            () => {
                this.openSnackBar('Activity added correctly', '');
                this.store.dispatch(new ResetActivityFlagAction());
            }
        );

        this.startedItem.subscribe(
            () => {
                this.openSnackBar('Activity logged correctly', '');
                this.store.dispatch(new ResetActivityFlagAction());
            }
        );

        this.endedItem.subscribe(
            () => {
                this.openSnackBar('Activity ended correctly', '');
                this.store.dispatch(new ResetActivityFlagAction());
            }
        );
    }

    goToSettings() {
        this.store.dispatch(new RouterActions.Go({
            path: ['/dashboard/settings']
        }));
    }

    startItem($event) {
        const date = new Date();
        const log = { id: $event.id, date };
        this.store.dispatch(new StartActivityAction({ log }));
    }

    stopItem($event) {
        const date = new Date();
        const log = { id: $event.id, date };
        this.store.dispatch(new StopActivityAction({ log }));
    }

    openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    }
}

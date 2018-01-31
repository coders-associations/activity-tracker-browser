import { Component, OnInit } from '@angular/core';
import { GridsterConfig } from 'angular-gridster2';
import { getDashboardState } from '../../store/dashboard.reducers';
import { State } from '../../../store/app.state';
import { Store } from '@ngrx/store';
import { Activity } from '../../models/activity';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { GetActivitiesAction } from '../../store/dashboard.actions';

@Component({
  selector: 'app-activity-grid',
  templateUrl: './activity-grid.component.html',
  styleUrls: ['./activity-grid.component.scss']
})
export class ActivityGridComponent implements OnInit {
    options: GridsterConfig;
    dashboard: Observable<Array<Activity>>;

    constructor(private store: Store<State>) {
    }

    ngOnInit() {
        this.options = {
            minCols: 6,
            minRows: 6,
            draggable: {
                enabled: true
            }
        };

        this.store.dispatch(new GetActivitiesAction());

        this.dashboard = this.store.select(getDashboardState).pipe(map(state => state.activities));
    }
}

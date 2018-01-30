import { Component, OnInit, ViewChild} from '@angular/core';
import { ActivityEvent } from '../../models/activityEvent';
import { Observable } from 'rxjs/Observable';
import { getDashboardState } from '../../store/dashboard.reducers';
import { State } from '../../../store/app.state';
import { Store } from '@ngrx/store';
import { startWith } from 'rxjs/operators';
import { GetActivityHistoryAction } from '../../store/dashboard.actions';
import { MatPaginator, PageEvent } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { combineLatest } from 'rxjs/observable/combineLatest';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
    displayedColumns = ['id', 'name', 'type', 'eventType', 'eventDate'];
    @ViewChild(MatPaginator) paginator: MatPaginator;
    activityEventsList = this.store.select(getDashboardState).map(state => state.activityEvents);
    dataSource: ActivityDataSource;

    constructor(private store: Store<State>) {
    }

    ngOnInit() {
        this.dataSource = new ActivityDataSource(this.paginator, this.activityEventsList);
        this.store.dispatch(new GetActivityHistoryAction());
    }
}

export class ActivityDataSource extends DataSource<any> {

    constructor(private paginator: MatPaginator, private activityEventList: Observable<ActivityEvent[]>) {
        super();
    }

    connect(): Observable<ActivityEvent[]> {
        const paginatorStream = this.paginator.page.pipe(startWith(new PageEvent()));

        return combineLatest(paginatorStream, this.activityEventList, (page, activityList) => {
            this.paginator.length = activityList.length;
            const startIndex = this.paginator.pageIndex * this.paginator.pageSize;

            return activityList.slice(startIndex, startIndex + this.paginator.pageSize);
            }
        );
    }

    disconnect() {
    }
}

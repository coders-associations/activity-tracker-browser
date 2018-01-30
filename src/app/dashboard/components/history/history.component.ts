import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { ActivityEvent } from '../../models/activityEvent';
import { Observable } from 'rxjs/Observable';
import { getDashboardState } from '../../store/dashboard.reducers';
import { State } from '../../../store/app.state';
import { Store } from '@ngrx/store';
import {map, skip, take, tap} from 'rxjs/operators';
import { GetActivityHistoryAction } from '../../store/dashboard.actions';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {DataSource} from "@angular/cdk/collections";
import {merge} from "rxjs/observable/merge";
import {combineLatest} from "rxjs/observable/combineLatest";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
    displayedColumns = ['id', 'name', 'type', 'eventType', 'eventDate'];
    @ViewChild(MatPaginator) paginator: MatPaginator;

    activityEventsList = this.store.select(getDashboardState).map(state => state.activityEvents);
    dataSource: ExampleDataSource;

    constructor(private store: Store<State>) {
    }

    ngOnInit() {
        this.dataSource = new ExampleDataSource(this.paginator, this.activityEventsList);
        this.store.dispatch(new GetActivityHistoryAction());
        this.paginator.pageIndex = 0;
    }
}

export class ExampleDataSource extends DataSource<any> {

    constructor(private paginator: MatPaginator, private activityEventList: Observable<ActivityEvent[]>) {
        super();
    }

    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<ActivityEvent[]> {
        return combineLatest(this.paginator.page, this.activityEventList, (page, activityList) => {
            const startIndex = this.paginator.pageIndex * this.paginator.pageSize;

            return activityList.slice(startIndex, startIndex + this.paginator.pageSize);
            }
        );
    }

    disconnect() {
    }
}

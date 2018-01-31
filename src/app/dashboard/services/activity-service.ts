import {Inject, Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Activity } from '../models/activity';
import { ActivityEvent } from '../models/activityEvent';
import { MOCK_ACTIVITIES } from '../mocks/activities';
import { MOCK_ACTIVITY_EVENTS } from '../mocks/activityEvents';
import { EventColors } from '../enums/eventColors';
import {APP_CONFIG, AppConfig} from "../../app-config.module";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class ActivityService {
    /**
     * Returns the authenticated user
     * @returns {User}
     */
    constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) {

    }

    addActivity(activity: Activity): Observable<string> {
        const {name, color, type} = activity;

        if (this.config.server_available) {
            return this.http
                .post(`${this.config.apiEndpoint}/action`, {name, color, type})
                .pipe(
                    map(data => data['id'])
                );
        } else {
            return Observable.of('xyz');
        }
    }

    logItem(): Observable<boolean> {
        return Observable.of(true);
    }

    getItemsList(): Observable<Array<Activity>> {
        return Observable.of(this.determineSizes(MOCK_ACTIVITIES));
    }


    getActivitiesHistory(): Observable<Array<ActivityEvent>> {
        return Observable.of(MOCK_ACTIVITY_EVENTS);
    }

    determineSizes(itemList): Array<Activity> {
        return itemList.map((item) => {
            switch (item.type) {
                case 'freq':
                    item.cols = 1;
                    item.rows = 1;
                    item.color = EventColors.FREQ;
                    break;
                case 'time':
                    item.cols = 2;
                    item.rows = 1;
                    item.color = EventColors.TIME;
                    break;
                case 'settings':
                    item.cols = 1;
                    item.rows = 2;
                    item.color = EventColors.SETTINGS;
                    break;
                case 'new':
                    item.cols = 1;
                    item.rows = 2;
                    item.color = EventColors.NEW;
                    break;
            }

            return item;
        });
    }
}
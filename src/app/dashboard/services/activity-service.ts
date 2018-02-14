import {Inject, Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Activity } from '../models/activity';
import { ActivityEvent } from '../models/activityEvent';
import { MOCK_ACTIVITIES } from '../mocks/activities';
import { MOCK_ACTIVITY_EVENTS } from '../mocks/activityEvents';
import { EventColors } from '../enums/eventColors';
import { APP_CONFIG, AppConfig } from '../../app-config.module';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

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
                .post(`${this.config.apiEndpoint}/activities`, { name, color, type })
                .pipe(
                    map(data => data['id'])
                );
        } else {
            return Observable.of('xyz');
        }
    }

    startItem(id, start_date): Observable<Activity> {
        if (this.config.server_available) {
            return this.http
                .post(`${this.config.apiEndpoint}/activities/${id}/start`, { start_date })
                .pipe(
                    map(data => data['result'])
                );
        } else {
            return Observable.of(MOCK_ACTIVITIES[0]);
        }
    }

    deleteItem(id): Observable<boolean> {
        if (this.config.server_available) {
            return this.http
                .delete(`${this.config.apiEndpoint}/activities/${id}`, {
                    responseType: 'text',
                })
                .pipe(
                    map(() => true)
                );
        } else {
            return Observable.of(true);
        }
    }

    stopItem(id, end_date): Observable<Activity> {
        if (this.config.server_available) {
            return this.http
                .post(`${this.config.apiEndpoint}/activities/${id}/stop`, { end_date })
                .pipe(
                    map(data => data['result'])
                );
        } else {
            return Observable.of(MOCK_ACTIVITIES[0]);
        }
    }

    getItemsList(): Observable<Array<Activity>> {
        if (this.config.server_available) {
            return this.http
                .get(`${this.config.apiEndpoint}/activities`)
                .pipe(
                    map(data => data['actions']),
                    map(actions => {
                        actions.push({
                            name: 'new',
                            type: 'new',
                        });
                        actions.push({
                            name: 'settings',
                            type: 'settings',
                        });

                        return actions;
                    }),
                    map(actions => this.determineSizes(actions))
                );
        } else {
            return Observable.of(this.determineSizes(MOCK_ACTIVITIES));
        }
    }


    getActivitiesHistory(): Observable<Array<ActivityEvent>> {
        if (this.config.server_available) {
            return this.http
                .get(`${this.config.apiEndpoint}/logs`)
                .pipe(
                    map(data => {
                        //console.log(data['logs'][0].activitiesLog);
                        return data['logs'][0].activitiesLog;
                    })
                );
        } else {
            return Observable.of(MOCK_ACTIVITY_EVENTS);
        }
    }

    determineSizes(itemList): Array<Activity> {
        return itemList.map((item) => {
            if (!item.hasOwnProperty('name') && !item.name) {
                item.name = 'Default name';
            }

            switch (item.type) {
                case 'freq':
                    item.cols = 1;
                    item.rows = 1;
                    item.color = item.color || EventColors.FREQ;
                    break;
                case 'time':
                    item.cols = 2;
                    item.rows = 1;
                    item.color = item.color || EventColors.TIME;
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
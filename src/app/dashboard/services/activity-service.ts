import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Activity } from '../models/activity';
import { ActivityEvent } from '../models/activityEvent';
import { MOCK_ACTIVITIES } from '../mocks/activities';
import { MOCK_ACTIVITY_EVENTS } from '../mocks/activityEvents';

@Injectable()
export class ActivityService {
    /**
     * Returns the authenticated user
     * @returns {User}
     */
    addItem(): Observable<boolean> {
        // Normally you would do an HTTP request to determine if
        // the user has an existing auth session on the server
        // but, let's just return the mock user for this example.
        return Observable.of(true);
    }

    logItem(): Observable<boolean> {
        // Normally you would do an HTTP request to determine if
        // the user has an existing auth session on the server
        // but, let's just return the mock user for this example.
        return Observable.of(true);
    }

    getItemsList(): Observable<Array<Activity>> {
        // Normally you would do an HTTP request to determine if
        // the user has an existing auth session on the server
        // but, let's just return the mock user for this example.
        return Observable.of(this.determineSizes(MOCK_ACTIVITIES));
    }


    getActivitiesHistory(): Observable<Array<ActivityEvent>> {
        // Normally you would do an HTTP request to determine if
        // the user has an existing auth session on the server
        // but, let's just return the mock user for this example.
        return Observable.of(MOCK_ACTIVITY_EVENTS);
    }

    determineSizes(itemList): Array<Activity> {
        return itemList.map((item) => {
            switch (item.type) {
                case 'freq':
                    item.cols = 1;
                    item.rows = 1;
                    item.color = '#EF5350';
                    break;
                case 'time':
                    item.cols = 2;
                    item.rows = 1;
                    item.color = '#5C6BC0';
                    break;
                case 'settings':
                    item.cols = 1;
                    item.rows = 2;
                    item.color = '#90A4AE';
                    break;
                case 'new':
                    item.cols = 1;
                    item.rows = 2;
                    item.color = '#CFD8DC';
                    break;
            }

            return item;
        });
    }
}
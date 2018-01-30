import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Activity } from '../models/activity';
import { ActivityEvent } from '../models/activityEvent';
import { MOCK_ACTIVITIES } from '../mocks/activities';
import { MOCK_ACTIVITY_EVENTS } from '../mocks/activityEvents';
import { EventColors } from '../enums/eventColors';

@Injectable()
export class ActivityService {
    /**
     * Returns the authenticated user
     * @returns {User}
     */
    addItem(): Observable<boolean> {
        return Observable.of(true);
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
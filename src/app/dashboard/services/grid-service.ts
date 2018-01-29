import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Activity } from '../models/activity';

export const MOCK_ACTIVITIES: Array<Activity> = [
    {
        cols: 0,
        rows: 0,
        name: 'xyz',
        type: 'freq',
        color: 'blue'
    },
    {
        cols: 0,
        rows: 0,
        name: 'xyz',
        type: 'time',
        color: 'blue'
    },
    {
        cols: 0,
        rows: 0,
        name: 'xyz',
        type: 'freq',
        color: 'blue'
    },
    {
        cols: 0,
        rows: 0,
        name: 'xyz',
        type: 'time',
        color: 'blue'
    },
    {
        cols: 0,
        rows: 0,
        name: 'xyz',
        type: 'time',
        color: 'blue'
    },
    {
        cols: 0,
        rows: 0,
        name: 'xyz',
        type: 'time',
        color: 'blue'
    },
    {
        cols: 0,
        rows: 0,
        name: 'xyz',
        type: 'new',
        color: 'blue'
    },
    {
        cols: 0,
        rows: 0,
        name: 'xyz',
        type: 'settings',
        color: 'blue'
    }
];

@Injectable()
export class GridService {
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

    getItemsList(): Observable<Array<Activity>> {
        // Normally you would do an HTTP request to determine if
        // the user has an existing auth session on the server
        // but, let's just return the mock user for this example.
        return Observable.of(this.determineSizes(MOCK_ACTIVITIES));
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
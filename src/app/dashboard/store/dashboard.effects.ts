import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import {
    ActionTypes, GetActivitiesErrorAction, GetActivitiesSuccessAction, GetActivityHistoryErrorAction,
    GetActivityHistorySuccessAction
} from './dashboard.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { ActivityService } from '../services/activity-service';

@Injectable()
export class ActivityEffects {

    @Effect()
    public getActivityHistory: Observable<Action> = this.actions
        .ofType(ActionTypes.GET_ACTIVITY_HISTORY)
        .pipe(
            map(toPayload),
            switchMap(payload =>
                this.activityService.getActivitiesHistory()
                    .pipe(
                        map(activityEvents => new GetActivityHistorySuccessAction({ activityEvents })),
                        catchError(error => Observable.of(new GetActivityHistoryErrorAction({ error })))
                    )
            )
        );

    @Effect()
    public getActivities: Observable<Action> = this.actions
        .ofType(ActionTypes.GET_ACTIVITIES)
        .pipe(
            map(toPayload),
            switchMap(payload =>
                this.activityService.getItemsList()
                    .pipe(
                        map(activities => new GetActivitiesSuccessAction({ activities })),
                        catchError(error => Observable.of(new GetActivitiesErrorAction({ error })))
                    )
            )
        );

    /**
     * @constructor
     * @param {Actions }actions
     * @param {UserService} userService
     */
    constructor(private actions: Actions,
                private activityService: ActivityService) {
    }
}
import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import {
    ActionTypes,
    ActivityErrorAction,
    AddActivitySuccessAction,
    DeleteActivitySuccessAction,
    GetActivitiesSuccessAction,
    GetActivityHistorySuccessAction,
    StartActivitySuccessAction,
    StopActivitySuccessAction
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
                        catchError(error => Observable.of(new ActivityErrorAction({ error })))
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
                        catchError(error => Observable.of(new ActivityErrorAction({ error })))
                    )
            )
        );

    @Effect()
    public addActivity: Observable<Action> = this.actions
        .ofType(ActionTypes.ADD_ACTIVITY)
        .pipe(
            map(toPayload),
            switchMap(payload =>
                this.activityService.addActivity(payload.activity)
                    .pipe(
                        map(id => new AddActivitySuccessAction({ activity: { ...payload.activity, id } })),
                        catchError(error => Observable.of(new ActivityErrorAction({ error })))
                    )
            )
        );

    @Effect()
    public deleteActivity: Observable<Action> = this.actions
        .ofType(ActionTypes.DELETE_ACTIVITY)
        .pipe(
            map(toPayload),
            switchMap(payload =>
                this.activityService.deleteItem(payload.id)
                    .pipe(
                        map(() => new DeleteActivitySuccessAction({ id: payload.id })),
                        catchError(error => Observable.of(new ActivityErrorAction({ error })))
                    )
            )
        );

    @Effect()
    public startActivity: Observable<Action> = this.actions
        .ofType(ActionTypes.START_ACTIVITY)
        .pipe(
            map(toPayload),
            switchMap(payload =>
                this.activityService.startItem(payload.log.id, payload.log.date)
                    .pipe(
                        map(activity => new StartActivitySuccessAction( { activity })),
                        catchError(error => Observable.of(new ActivityErrorAction({ error })))
                    )
            )
        );

    @Effect()
    public stopActivity: Observable<Action> = this.actions
        .ofType(ActionTypes.STOP_ACTIVITY)
        .pipe(
            map(toPayload),
            switchMap(payload =>
                this.activityService.stopItem(payload.log.id, payload.log.date)
                    .pipe(
                        map(activity => new StopActivitySuccessAction( { activity } )),
                        catchError(error => Observable.of(new ActivityErrorAction({ error })))
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
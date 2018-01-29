import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { ActionTypes, GetActivitiesErrorAction, GetActivitiesSuccessAction } from './dashboard.actions';
import { debounceTime, switchMap, map, catchError } from 'rxjs/operators';
import { GridService } from '../services/grid-service';

@Injectable()
export class UserEffects {

    /**
     * Authenticate user.
     */
    @Effect()
    public authenticate: Observable<Action> = this.actions
        .ofType(ActionTypes.GET_ACTIVITIES)
        .pipe(
            debounceTime(500),
            map(toPayload),
            switchMap(payload =>
                this.gridService.getItemsList()
                    .pipe(
                        map(activities => {
                            console.log(activities)
                            return new GetActivitiesSuccessAction({ activities })
                        }),
                        catchError(error => Observable.of(new GetActivitiesErrorAction({ error })))
                    )
            )
        );;

    /**
     * @constructor
     * @param {Actions }actions
     * @param {UserService} userService
     */
    constructor(private actions: Actions,
                private gridService: GridService) {
    }
}
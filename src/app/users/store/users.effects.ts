import { Injectable } from '@angular/core';

// import @ngrx
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';

// import rxjs
import { Observable } from 'rxjs/Observable';
import {catchError, debounceTime, map, switchMap} from 'rxjs/operators';

// import services
import { UserService } from '../../core/services/user.service';

// import actions
import {
    ActionTypes,
    AuthenticatedErrorAction,
    AuthenticatedSuccessAction,
    AuthenticationErrorAction,
    AuthenticationSuccessAction,
    SignOutErrorAction,
    SignOutSuccessAction,
    SignUpErrorAction,
    SignUpSuccessAction
} from './users.actions';

/**
 * Effects offer a way to isolate and easily test side-effects within your
 * application.
 * The `toPayload` helper function returns just
 * the payload of the currently dispatched action, useful in
 * instances where the current state is not necessary.
 *
 * Documentation on `toPayload` can be found here:
 * https://github.com/ngrx/effects/blob/master/docs/api.md#topayload
 *
 * If you are unfamiliar with the operators being used in these examples, please
 * check out the sources below:
 *
 * Official Docs: http://reactivex.io/rxjs/manual/overview.html#categories-of-operators
 * RxJS 5 Operators By Example: https://gist.github.com/btroncone/d6cf141d6f2c00dc6b35
 */

@Injectable()
export class UserEffects {

    /**
     * Authenticate user.
     */
    @Effect()
    public authenticate: Observable<Action> = this.actions
        .ofType(ActionTypes.AUTHENTICATE)
        .pipe(
            debounceTime(500),
            map(toPayload),
            switchMap(payload =>
                this.userService.authenticate(payload.email, payload.password)
                    .pipe(
                        map(user => new AuthenticationSuccessAction({user: user})),
                        catchError(error => Observable.of(new AuthenticationErrorAction({error: error})))
                    )
            )
        );

    /**
     * Determine if the user is authenticated.
     */
    @Effect()
    public authenticated: Observable<Action> = this.actions
        .ofType(ActionTypes.AUTHENTICATED)
        .pipe(
            map(toPayload),
            switchMap(payload =>
                this.userService.authenticatedUser()
                    .pipe(
                        map(user => new AuthenticatedSuccessAction({authenticated: (user !== null), user: user})),
                        catchError(error => Observable.of(new AuthenticatedErrorAction({error: error})))
                    )
            )
        );

    /**
     * Create a new user.
     */
    @Effect()
    public createUser: Observable<Action> = this.actions
        .ofType(ActionTypes.SIGN_UP)
        .pipe(
            debounceTime(500),
            map(toPayload),
            switchMap(payload =>
                this.userService.create(payload.user)
                    .pipe(
                        map(user => new SignUpSuccessAction({user: user})),
                        catchError(error => Observable.of(new SignUpErrorAction({error: error})))
                    )
            )
        );

    /**
     * Terminate user session.
     */
    @Effect()
    public signOut: Observable<Action> = this.actions
        .ofType(ActionTypes.SIGN_OUT)
        .pipe(
            map(toPayload),
            switchMap(payload =>
                this.userService.signout()
                    .pipe(
                        map(value => new SignOutSuccessAction()),
                        catchError(error => Observable.of(new SignOutErrorAction({error: error})))
                    )
            )
        );

    /**
     * @constructor
     * @param {Actions }actions
     * @param {UserService} userService
     */
    constructor(private actions: Actions,
                private userService: UserService) {
    }
}

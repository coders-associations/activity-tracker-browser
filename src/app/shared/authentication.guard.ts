import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

// import rxjs
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';

// import @ngrx
import { Store } from '@ngrx/store';

import * as RouterActions from '../core/router.actions';
import { State } from '../store/app.state';
import { getUsersState } from '../users/store/users.reducers';
import {map, tap, take} from 'rxjs/operators';

/**
 * Prevent unauthorized activating and loading of routes
 * @class AuthenticatedGuard
 */
@Injectable()
export class AuthenticatedGuard implements CanActivate {

    /**
     * @constructor
     */
    constructor(private store: Store<State>) {}

    /**
     * True when user is authenticated
     * @method canActivate
     */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | boolean {
        // get observable
        const observable = this.store
            .select(getUsersState)
            .pipe(
                map(state => state.authenticated),
                tap(authenticated => {
                    if (!authenticated) {
                        this.store.dispatch(new RouterActions.Go({
                            path: ['/users/sign-in', {routeParam: 1}]
                        }));
                    }
                }),
                take(1)
            );

        return observable;
    }
}

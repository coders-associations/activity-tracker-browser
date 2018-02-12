import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { getUsersState } from './users/store/users.reducers';
import { State } from './store/app.state';
import { Store } from '@ngrx/store';
import { map, switchMap } from 'rxjs/operators';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
    public token: Observable<string>;

    constructor(private store: Store<State>) {
        this.token = this.store.select(getUsersState).pipe(map(state => state.token));
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return this.token
            .take(1)
            .pipe(switchMap(token => {
                const authReq = req.clone({headers: req.headers.set('Authorization', `Bearer ${token}`)});
                return next.handle(authReq);
            }));
    }
}

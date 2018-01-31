import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { getUsersState } from './users/store/users.reducers';
import { State } from './store/app.state';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
    public token: Observable<string>;

    constructor(private store: Store<State>) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.token = this.store.select(getUsersState).pipe(map(state => state.token));

        if (this.token) {
            const authReq = req.clone({headers: req.headers.set('authorization', `Barrer ${this.token}`)});
            return next.handle(authReq);
        }

        return next.handle(req);
    }
}

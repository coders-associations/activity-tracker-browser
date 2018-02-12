import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG, AppConfig } from '../../app-config.module';
import { map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

export const MOCK_USER: User = {
   _id: '1',
    email: '1',
    firstName: 'Foo',
    lastName: 'Bar',
    password: '1',
};

/**
 * The user service.
 */
@Injectable()
export class UserService {

    /**
     * True if authenticated
     * @type
     */
    private _authenticated = false;

    constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig, private cookieService: CookieService) {

    }

    /**
     * Authenticate the user
     *
     * @param {string} email The user's email address
     * @param {string} password The user's password
     * @returns {Observable<string>} The authenticated user observable.
     */
    authenticate(email: string, password: string): Observable<any> {
        // Normally you would do an HTTP request to determine to
        // attempt authenticating the user using the supplied credentials.

        if (this.config.server_available) {
            return this.http
                .post(`${this.config.apiEndpoint}/auth`, {email, password})
                .pipe(
                    map(data => data['token'] )
                );
        } else {
            if (email === MOCK_USER.email && password === MOCK_USER.password) {
                this._authenticated = true;
                return Observable.of('xyz');
            }

            return Observable.throw(new Error('Invalid email or password'));
        }
    }

    /**
     * Determines if the user is authenticated
     * @returns {Observable<boolean>}
     */
    authenticated(): Observable<string> {
        const token = this.cookieService.get('x-activity-token');
        console.log(token);

        return Observable.of(token);
    }

    /**
     * Returns the authenticated user
     * @returns {User}
     */
    authenticatedUser(): Observable<User> {
        // Normally you would do an HTTP request to determine if
        // the user has an existing auth session on the server
        // but, let's just return the mock user for this example.
        return Observable.of(MOCK_USER);
    }

    /**
     * Create a new user
     * @returns {User}
     */
    create(user: User): Observable<User> {
        const {email, password, firstName, lastName} = user;

        if (this.config.server_available) {
            return this.http
                .post(`${this.config.apiEndpoint}/users`, {email, password, firstName, lastName})
                .pipe(
                    map(data => {
                        return user;
                    })
                );
        } else {
            this._authenticated = true;
            return Observable.of(user);
        }
    }

    /**
     * End session
     * @returns {Observable<boolean>}
     */
    signout(): Observable<boolean> {
        // Normally you would do an HTTP request sign end the session
        // but, let's just return an observable of true.
        this._authenticated = false;
        return Observable.of(true);
    }
}

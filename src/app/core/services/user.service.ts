import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';
import { User } from '../models/user';

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

    /**
     * Authenticate the user
     *
     * @param {string} email The user's email address
     * @param {string} password The user's password
     * @returns {Observable<User>} The authenticated user observable.
     */
    authenticate(email: string, password: string): Observable<User> {
        // Normally you would do an HTTP request to determine to
        // attempt authenticating the user using the supplied credentials.

        if (email === MOCK_USER.email && password === MOCK_USER.password) {
            this._authenticated = true;
            return Observable.of(MOCK_USER);
        }

        return Observable.throw(new Error('Invalid email or password'));
    }

    /**
     * Determines if the user is authenticated
     * @returns {Observable<boolean>}
     */
    authenticated(): Observable<boolean> {

        return Observable.of(this._authenticated);
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
        // Normally you would do an HTTP request to POST the user
        // details and then return the new user object
        // but, let's just return the new user for this example.
        this._authenticated = true;
        return Observable.of(user);
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

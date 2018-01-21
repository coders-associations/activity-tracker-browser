import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @ngrx
import { Store } from '@ngrx/store';

// rxjs
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/filter';

// actions
import { AuthenticateAction } from '../store/users.actions';
import * as RouterActions from '../../core/router.actions';


// reducers
import {
    getAuthenticationError,
    isAuthenticated,
    isAuthenticationLoading
} from '../../store/app.reducers';
import { State } from '../../store/app.state';

/**
 * /users/sign-in
 * @class SignInComponent
 */
@Component({
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnDestroy, OnInit {

    /**
     * The error if authentication fails.
     * @type {Observable<string>}
     */
    public error: Observable<string>;

    /**
     * True if the authentication is loading.
     * @type {boolean}
     */
    public loading: Observable<boolean>;

    /**
     * True if user is authenticated.
     * @type {boolean}
     */
    public authenticated: Observable<boolean>;

    /**
     * The authentication form.
     * @type {FormGroup}
     */
    public form: FormGroup;

    /**
     * Component state.
     * @type {boolean}
     */
    private alive = true;

    /**
     * @constructor
     * @param {FormBuilder} formBuilder
     * @param {Store<State>} store
     */
    constructor(
        private formBuilder: FormBuilder,
        private store: Store<State>
    ) { }

    /**
     * Lifecycle hook that is called after data-bound properties of a directive are initialized.
     * @method ngOnInit
     */
    public ngOnInit() {
        // set formGroup
        this.form = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });

        // set error
        this.error = this.store.select(getAuthenticationError);

        // set loading
        this.loading = this.store.select(isAuthenticationLoading);

        this.authenticated = this.store.select(isAuthenticated);

        // subscribe to success
        this.store.select(isAuthenticated)
            .takeWhile(() => this.alive)
            .filter(authenticated => authenticated)
            .subscribe(value => {
                this.store.dispatch(new RouterActions.Go({
                    path: ['/users/my-account', { routeParam: 1 }]
                }));
            });
    }

    /**
     *  Lifecycle hook that is called when a directive, pipe or service is destroyed.
     * @method ngOnDestroy
     */
    public ngOnDestroy() {
        this.alive = false;
    }

    /**
     * Go to the home page.
     * @method home
     */
    public home() {
        this.store.dispatch(new RouterActions.Go({
            path: ['/', { routeParam: 1 }]
        }));
    }

    /**
     * To to the sign up page.
     * @method signUp
     */
    public signUp() {
        this.store.dispatch(new RouterActions.Go({
            path: ['/users/sign-up', { routeParam: 1 }]
        }));
    }

    /**
     * Submit the authentication form.
     * @method submit
     */
    public submit() {
        // get email and password values
        const email: string = this.form.get('email').value;
        const password: string = this.form.get('password').value;

        // trim values
        email.trim();
        password.trim();

        // set payload
        const payload = {
            email: email,
            password: password
        };

        // dispatch AuthenticationAction and pass in payload
        this.store.dispatch(new AuthenticateAction(payload));
    }
}

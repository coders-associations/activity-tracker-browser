import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @ngrx
import { Store } from '@ngrx/store';

// rxjs
import { Observable } from 'rxjs/Observable';
import { filter, map, takeWhile } from 'rxjs/operators';

// actions
import { AuthenticateAction } from '../../store/users.actions';
import * as RouterActions from '../../../store/router.actions';


import { State } from '../../../store/app.state';
import { getUsersState } from '../../store/users.reducers';

/**
 * /users/sign-in
 * @class SignInComponent
 */
@Component({
    selector: 'app-sign-in',
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
            email: ['', [Validators.required, Validators.pattern('[^ @]*@[^ @]*')]],
            password: ['', [Validators.required, Validators.minLength(8)]]
        });

        // set error
        this.error = this.store.select(getUsersState).pipe(map(state => state.error));

        // set loading
        this.loading = this.store.select(getUsersState).pipe(map(state => state.loading));

        this.authenticated = this.store.select(getUsersState).pipe(map(state => state.authenticated));

        // subscribe to success
        this.store.select(getUsersState)
            .pipe(
                map(state => state.authenticated),
                takeWhile(() => this.alive),
                filter(authenticated => authenticated)
            )
            .subscribe(value => {
                this.store.dispatch(new RouterActions.Go({
                    path: ['/dashboard/activities']
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
            path: ['/']
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
        const email: string = this.form.get('email').value.trim();
        const password: string = this.form.get('password').value.trim();

        // set payload
        const payload = {
            email: email,
            password: password
        };

        // dispatch AuthenticationAction and pass in payload
        this.store.dispatch(new AuthenticateAction(payload));
    }
}

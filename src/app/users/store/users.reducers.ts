// import actions
import { Actions, ActionTypes } from './users.actions';

// import models
import { User } from '../models/user';
import { State } from './users.state';
import { createFeatureSelector } from '@ngrx/store';

/**
 * The reducer function.
 * @function reducer
 * @param {State} state Current state
 * @param {Actions} action Incoming action
 */
export function reducer(state: any, action: Actions): State {

    switch (action.type) {
        case ActionTypes.AUTHENTICATE:
            return {
                ...state,
                loading: true
            };

        case ActionTypes.AUTHENTICATED_ERROR:
            return {
                ...state,
                authenticated: false,
                error: action.payload.error.message,
                loaded: true
            };

        case ActionTypes.AUTHENTICATED_SUCCESS:
        case ActionTypes.AUTHENTICATE_SUCCESS:
            return {
                ...state,
                authenticated: action.payload.authenticated,
                loaded: true,
                token: action.payload.token,
                loading: false
            };

        case ActionTypes.AUTHENTICATE_ERROR:
        case ActionTypes.SIGN_UP_ERROR:
            return {
                ...state,
                authenticated: false,
                error: action.payload.error.message,
                loading: false
            };

        case ActionTypes.SIGN_UP_SUCCESS:
            const user: User = action.payload.user;

            // verify user is not null
            if (user === null) {
                return state;
            }

            return {
                ...state,
                authenticated: true,
                error: undefined,
                loading: false,
                user: user
            };

        case ActionTypes.SIGN_OUT_ERROR:
            return {
                ...state,
                authenticated: true,
                error: action.payload.error.message,
                user: undefined
            };

        case ActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                authenticated: false,
                error: undefined,
                user: undefined
            };

        case ActionTypes.SIGN_UP:
            return {
                ...state,
                authenticated: false,
                error: undefined,
                loading: true
            };

        default:
            return state;
    }
}

export const getUsersState = createFeatureSelector<State>('users');

/**
 * Returns true if the user is authenticated.
 * @function isAuthenticated
 * @param {State} state
 * @returns {boolean}
 */
export const isAuthenticated = (state: State) => state.authenticated;

/**
 * Returns true if the authenticated has loaded.
 * @function isAuthenticatedLoaded
 * @param {State} state
 * @returns {boolean}
 */
export const isAuthenticatedLoaded = (state: State) => state.loaded;

/**
 * Return the users state
 * @function getAuthenticatedUser
 * @param {State} state
 * @returns {User}
 */
export const getAuthenticatedUser = (state: State) => state.user;

/**
 * Returns the authentication error.
 * @function getAuthenticationError
 * @param {State} state
 * @returns {Error}
 */
export const getAuthenticationError = (state: State) => state.error;

/**
 * Returns true if request is in progress.
 * @function isLoading
 * @param {State} state
 * @returns {boolean}
 */
export const isLoading = (state: State) => state.loading;

/**
 * Returns the sign out error.
 * @function getSignOutError
 * @param {State} state
 * @returns {Error}
 */
export const getSignOutError = (state: State) => state.error;

/**
 * Returns the sign up error.
 * @function getSignUpError
 * @param {State} state
 * @returns {Error}
 */
export const getSignUpError = (state: State) => state.error;

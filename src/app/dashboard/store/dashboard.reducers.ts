/**
 * The reducer function.
 * @function reducer
 * @param {State} state Current state
 * @param {Actions} action Incoming action
 */
import { Actions, ActionTypes } from './dashboard.actions';
import { State } from './dashboard.state';
import { createFeatureSelector } from '@ngrx/store';

export function reducer(state: any, action: Actions): State {

    switch (action.type) {
        case ActionTypes.ADD_ACTIVITY:
            return {
                ...state,
                loading: true
            };

        case ActionTypes.ADD_ACTIVITY_SUCCESS:
            return {
                ...state,
                activities: [...state.activities, action.payload.activity],
                loaded: true
            };

        case ActionTypes.ADD_ACTIVITY_ERROR:
            return {
                ...state,
                loaded: true
            };

        case ActionTypes.GET_ACTIVITIES:
            return {
                ...state,
                loading: true
            };

        case ActionTypes.GET_ACTIVITIES_SUCCESS:
            return {
                ...state,
                activities: action.payload.activities,
                loaded: true
            };

        case ActionTypes.GET_ACTIVITIES_ERROR:
            return {
                ...state,
                loaded: true
            };
        case ActionTypes.GET_ACTIVITY_HISTORY:
            return {
                ...state,
                loading: true
            };

        case ActionTypes.GET_ACTIVITY_HISTORY_SUCCESS:
            return {
                ...state,
                activityEvents: action.payload.activityEvents,
                loaded: true
            };

        case ActionTypes.GET_ACTIVITY_HISTORY_ERROR:
            return {
                ...state,
                loaded: true
            };

        default:
            return state;
    }
}

export const getDashboardState = createFeatureSelector<State>('dashboard');


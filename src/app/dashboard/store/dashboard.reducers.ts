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

        case ActionTypes.START_ACTIVITY:
            return {
                ...state,
                loading: true
            };

        case ActionTypes.DELETE_ACTIVITY:
            return {
                ...state,
                loading: true
            };

        case ActionTypes.START_ACTIVITY_SUCCESS:
            const newActivities = state.activities.map(activity => {
                if (activity.id === action.payload.activity.id) {
                    return { ...activity, active_period: action.payload.activity.active_period };
                }

                return activity;
            });

            return {
                ...state,
                activities: newActivities,
                activityStarted: true
            };

        case ActionTypes.DELETE_ACTIVITY_SUCCESS:
            const updatedActivities = state.activities.filter(activity =>  activity.id !== action.payload.id );

            return {
                ...state,
                activities: updatedActivities,
                activityDeleted: true
            };

        case ActionTypes.RESET_ACTIVITY_FLAG:
            return {
                ...state,
                activityAdded: false,
                activityEnded: false,
                activityStarted: false,
                activityDeleted: false,
            };

        case ActionTypes.STOP_ACTIVITY:
            return {
                ...state,
                loading: true
            };

        case ActionTypes.STOP_ACTIVITY_SUCCESS:
            const newActivitiesList = state.activities.map(activity => {
                if (activity.id === action.payload.activity.id) {
                    activity.active_period = action.payload.activity.active_period;
                    return { ...activity, active_period: action.payload.activity.active_period };
                }

                return activity;
            });

            return {
                ...state,
                activities: newActivitiesList,
                activityEnded: true
            };

        case ActionTypes.ADD_ACTIVITY_SUCCESS:
            console.log(action.payload.activity);

            return {
                ...state,
                activityAdded: true,
                activities: [...state.activities, action.payload.activity],
                loaded: true
            };

        case ActionTypes.ACTIVITY_SUCCESS:
            return {
                ...state,
                loaded: true
            };

        case ActionTypes.ACTIVITY_ERROR:
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

        default:
            return state;
    }
}

export const getDashboardState = createFeatureSelector<State>('dashboard');

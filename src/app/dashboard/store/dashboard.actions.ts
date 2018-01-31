import { type } from '../../core/util';
import { Action } from '@ngrx/store';
import { Activity } from '../models/activity';
import {ActivityEvent} from '../models/activityEvent';

export const ActionTypes = {
    ADD_ACTIVITY:  type('[dashboard] Add activity'),
    ADD_ACTIVITY_SUCCESS:  type('[dashboard] Add activity success'),
    ADD_ACTIVITY_ERROR:  type('[dashboard] Add activity error'),
    LOG_ACTIVITY:  type('[dashboard] Log activity'),
    LOG_ACTIVITY_SUCCESS:  type('[dashboard] Log activity success'),
    LOG_ACTIVITY_ERROR:  type('[dashboard] Log activity error'),
    DELETE_ACTIVITY:  type('[dashboard] Delete activity'),
    DELETE_ACTIVITY_SUCCESS:  type('[dashboard] Delete activity success'),
    DELETE_ACTIVITY_ERROR:  type('[dashboard] Delete activity error'),
    GET_ACTIVITIES: type('[dashboard] Get activity'),
    GET_ACTIVITIES_SUCCESS: type('[dashboard] Get activity success'),
    GET_ACTIVITIES_ERROR: type('[dashboard] Get activity error'),
    GET_ACTIVITY_HISTORY: type('[dashboard] Get activity history'),
    GET_ACTIVITY_HISTORY_SUCCESS: type('[dashboard] Get activity history success'),
    GET_ACTIVITY_HISTORY_ERROR: type('[dashboard] Get activity history error'),
};

/**
 * AddActivity.
 * @class AddActivityAction
 * @implements {Action}
 */
export class AddActivityAction implements Action {
    public type: string = ActionTypes.ADD_ACTIVITY;

    constructor(public payload: { activity: Activity }) {}
}

/**
 * AddActivitySuccessAction.
 * @class AddActivitySuccessAction
 * @implements {Action}
 */
export class AddActivitySuccessAction implements Action {
    public type: string = ActionTypes.ADD_ACTIVITY_SUCCESS;

    constructor(public payload: { activity: Activity }) {}
}

/**
 * AddActivityErrorAction.
 * @class AddActivityErrorAction
 * @implements {Action}
 */
export class AddActivityErrorAction implements Action {
    public type: string = ActionTypes.ADD_ACTIVITY_ERROR;

    constructor(public payload?: any) {}
}

/**
 * GetActivitiesAction.
 * @class GetActivitiesAction
 * @implements {Action}
 */
export class GetActivitiesAction implements Action {
    public type: string = ActionTypes.GET_ACTIVITIES;

    constructor(public payload?: any) {}
}

/**
 * GetActivitiesSuccessAction.
 * @class GetActivitiesSuccessAction
 * @implements {Action}
 */
export class GetActivitiesSuccessAction implements Action {
    public type: string = ActionTypes.GET_ACTIVITIES_SUCCESS;

    constructor(public payload: { activities: Array<Activity> }) {}
}

/**
 * GetActivitiesErrorAction.
 * @class GetActivitiesErrorAction
 * @implements {Action}
 */
export class GetActivitiesErrorAction implements Action {
    public type: string = ActionTypes.GET_ACTIVITIES_ERROR;

    constructor(public payload?: any) {}
}

/**
 * GetActivitiesAction.
 * @class GetActivitiesAction
 * @implements {Action}
 */
export class GetActivityHistoryAction implements Action {
    public type: string = ActionTypes.GET_ACTIVITY_HISTORY;

    constructor(public payload?: any) {}
}

/**
 * GetActivitiesSuccessAction.
 * @class GetActivitiesSuccessAction
 * @implements {Action}
 */
export class GetActivityHistorySuccessAction implements Action {
    public type: string = ActionTypes.GET_ACTIVITY_HISTORY_SUCCESS;

    constructor(public payload: { activityEvents: Array<ActivityEvent> }) {}
}

/**
 * GetActivitiesErrorAction.
 * @class GetActivitiesErrorAction
 * @implements {Action}
 */
export class GetActivityHistoryErrorAction implements Action {
    public type: string = ActionTypes.GET_ACTIVITY_HISTORY_ERROR;

    constructor(public payload?: any) {}
}

export type Actions = AddActivityAction |
    AddActivitySuccessAction |
    AddActivityErrorAction |
    GetActivitiesAction |
    GetActivitiesSuccessAction |
    GetActivitiesErrorAction |
    GetActivityHistoryAction |
    GetActivityHistorySuccessAction |
    GetActivityHistoryErrorAction;

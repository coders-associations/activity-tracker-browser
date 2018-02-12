import { type } from '../../core/util';
import { Action } from '@ngrx/store';
import { Activity } from '../models/activity';
import { ActivityEvent } from '../models/activityEvent';
import { ItemLog } from '../models/itemLog';

export const ActionTypes = {
    ACTIVITY_ERROR:  type('[dashboard] Activity error'),
    RESET_ACTIVITY_FLAG:  type('[dashboard] Reset activity flag'),
    ACTIVITY_SUCCESS:  type('[dashboard] Activity success'),
    ADD_ACTIVITY:  type('[dashboard] Add activity'),
    ADD_ACTIVITY_SUCCESS:  type('[dashboard] Add activity success'),
    START_ACTIVITY:  type('[dashboard] Start activity'),
    START_ACTIVITY_SUCCESS:  type('[dashboard] Start activity success'),
    STOP_ACTIVITY:  type('[dashboard] Stop activity'),
    STOP_ACTIVITY_SUCCESS:  type('[dashboard] Stop activity success'),
    DELETE_ACTIVITY:  type('[dashboard] Delete activity'),
    DELETE_ACTIVITY_SUCCESS:  type('[dashboard] Delete activity success'),
    GET_ACTIVITIES: type('[dashboard] Get activity'),
    GET_ACTIVITIES_SUCCESS: type('[dashboard] Get activity success'),
    GET_ACTIVITY_HISTORY: type('[dashboard] Get activity history'),
    GET_ACTIVITY_HISTORY_SUCCESS: type('[dashboard] Get activity history success'),
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
 * DeleteActivity.
 * @class DeleteActivityAction
 * @implements {Action}
 */
export class DeleteActivityAction implements Action {
    public type: string = ActionTypes.DELETE_ACTIVITY;

    constructor(public payload: { id: string }) {}
}

/**
 * DeleteActivitySuccess.
 * @class DeleteActivitySuccessAction
 * @implements {Action}
 */
export class DeleteActivitySuccessAction implements Action {
    public type: string = ActionTypes.DELETE_ACTIVITY_SUCCESS;

    constructor(public payload: { id: string }) {}
}

/**
 * ResetActivityFlag.
 * @class ResetActivityFlag
 * @implements {Action}
 */
export class ResetActivityFlagAction implements Action {
    public type: string = ActionTypes.RESET_ACTIVITY_FLAG;

    constructor(public payload?: any) {}
}

/**
 * StartActivity.
 * @class StartActivityAction
 * @implements {Action}
 */
export class StartActivityAction implements Action {
    public type: string = ActionTypes.START_ACTIVITY;

    constructor(public payload: { log: ItemLog }) {}
}

/**
 * StartActivitySuccess.
 * @class StartActivitySuccess
 * @implements {Action}
 */
export class StartActivitySuccessAction implements Action {
    public type: string = ActionTypes.START_ACTIVITY_SUCCESS;

    constructor(public payload: { activity: Activity }) {}
}

/**
 * StopActivity.
 * @class StartActivityAction
 * @implements {Action}
 */
export class StopActivityAction implements Action {
    public type: string = ActionTypes.STOP_ACTIVITY;

    constructor(public payload: { log: ItemLog }) {}
}

/**
 * StartActivitySuccess.
 * @class StartActivitySuccess
 * @implements {Action}
 */
export class StopActivitySuccessAction implements Action {
    public type: string = ActionTypes.STOP_ACTIVITY_SUCCESS;

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
 * dActivitySuccessAction.
 * @class ActivitySuccessAction
 * @implements {Action}
 */
export class ActivitySuccessAction implements Action {
    public type: string = ActionTypes.ACTIVITY_SUCCESS;

    constructor(public payload?: any) {}
}

/**
 * ActivityErrorAction.
 * @class ActivityErrorAction
 * @implements {Action}
 */
export class ActivityErrorAction implements Action {
    public type: string = ActionTypes.ACTIVITY_ERROR;

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

export type Actions = AddActivityAction |
    AddActivitySuccessAction |
    StartActivityAction |
    StopActivityAction |
    ActivityErrorAction |
    GetActivitiesAction |
    GetActivitiesSuccessAction |
    GetActivityHistoryAction |
    GetActivityHistorySuccessAction |
    DeleteActivitySuccessAction |
    StopActivitySuccessAction |
    ResetActivityFlagAction;

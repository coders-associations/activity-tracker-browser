import { Activity } from '../models/activity';
import { ActivityEvent } from '../models/activityEvent';

export interface State {
    error?: string;
    loaded: boolean;
    loading: boolean;
    activityAdded: boolean;
    activityDeleted: boolean;
    activityStarted: boolean;
    activityEnded: boolean;
    activities: Array<Activity>;
    activityEvents: Array<ActivityEvent>;
}

/**
 * The initial state.
 */
export const initialState: State = {
    loaded: false,
    loading: false,
    activityAdded: false,
    activityDeleted: false,
    activityStarted: false,
    activityEnded: false,
    activities: [],
    activityEvents: []
};

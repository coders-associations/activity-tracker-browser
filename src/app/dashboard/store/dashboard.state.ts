import { Activity } from '../models/activity';
import { ActivityEvent } from '../models/activityEvent';

export interface State {
    error?: string;
    loaded: boolean;
    loading: boolean;
    activities: Array<Activity>;
    activityEvents: Array<ActivityEvent>;
}

/**
 * The initial state.
 */
export const initialState: State = {
    loaded: false,
    loading: false,
    activities: [],
    activityEvents: []
};

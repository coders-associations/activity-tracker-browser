import { Activity } from '../models/activity';

export interface State {
    error?: string;
    loaded: boolean;
    loading: boolean;
    activities: Array<Activity>;
}

/**
 * The initial state.
 */
export const initialState: State = {
    loaded: false,
    loading: false,
    activities: []
};

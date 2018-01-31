import { User } from '../models/user';
/**
 * The state.
 * @interface State
 */

export interface State {
    authenticated: boolean;
    error?: string;
    loaded: boolean;
    loading: boolean;
    token: string;
    user?: User;
}

/**
 * The initial state.
 */
export const initialState: State = {
    authenticated: false,
    loaded: false,
    loading: false,
    token: '',
};

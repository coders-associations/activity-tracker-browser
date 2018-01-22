import { User } from '../../core/models/user';
/**
 * The state.
 * @interface State
 */

export interface State {

    authenticated: boolean;
    error?: string;
    loaded: boolean;
    loading: boolean;
    user?: User;
}

/**
 * The initial state.
 */
export const initialState: State = {
    authenticated: false,
    loaded: false,
    loading: false
};

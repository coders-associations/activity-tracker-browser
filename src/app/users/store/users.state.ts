import { User } from '../../core/models/user';
/**
 * The state.
 * @interface State
 */

export interface State {

    // boolean if user is authenticated
    authenticated: boolean;

    // error message
    error?: string;

    // true if we have attempted existing auth session
    loaded: boolean;

    // true when loading
    loading: boolean;

    // the authenticated user
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

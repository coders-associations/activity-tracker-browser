/**
 * We treat each reducer like a table in a database.
 * This means our top level state interface is just a map of keys to inner state types.
 */
import {RouterReducerState} from '@ngrx/router-store';
import * as usersState from '../users/store/users.state';


export interface State {
    router: RouterReducerState;
    users: usersState.State;
}

export const initialState: State = Object.assign({}, { router: null }, { users: usersState.initialState });

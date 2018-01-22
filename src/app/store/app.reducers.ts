// @ngrx
import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */
import { State } from './app.state';

export const reducers: ActionReducerMap<State> = {
    router: routerReducer
};

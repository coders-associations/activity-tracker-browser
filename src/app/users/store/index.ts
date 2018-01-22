import { InjectionToken } from '@angular/core';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { INITIAL_STATE } from '@ngrx/store';
import { initialState, State} from './users.state';
import { UserEffects } from './users.effects';
import { reducer } from './users.reducers';

export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<State>>('users.reducer');

function getReducer() {
    return reducer;
}

function getInitialState() {
    return initialState;
}

const reducerProvider = {
    provide: REDUCER_TOKEN,
    useFactory: getReducer,
};

const initialStateProvider = {
    provide: INITIAL_STATE,
    useFactory: getInitialState,
};

const modelStoreModule = [
    StoreModule.forFeature('users', REDUCER_TOKEN, { initialState }),
];

const modelEffectsModule = [
    EffectsModule.forFeature([UserEffects]),
];

export {
    initialState,
    modelStoreModule,
    modelEffectsModule,
    reducerProvider,
    initialStateProvider,
    getReducer,
    getInitialState,
};
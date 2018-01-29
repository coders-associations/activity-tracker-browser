import { InjectionToken } from '@angular/core';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { INITIAL_STATE } from '@ngrx/store';
import { reducer } from './dashboard.reducers';
import { initialState, State } from './dashboard.state';
import { UserEffects } from './dashboard.effects';

export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<State>>('dashboard.reducer');

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
    StoreModule.forFeature('dashboard', REDUCER_TOKEN, { initialState }),
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

import { InjectionToken } from '@angular/core';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { State } from './app.state';
import { reducers } from './app.reducers';
import { EffectsModule } from '@ngrx/effects';
import { RouterEffects } from './router.effects';

export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<State>>('app.reducer');

export function getReducers() {
    return reducers;
}

export const reducerProvider = {
    provide: REDUCER_TOKEN,
    useFactory: getReducers
};

//  Modules
// ----------------------------------------
export const storeModule = [
    StoreModule.forRoot(REDUCER_TOKEN)
];

export const effectsModule = [
    EffectsModule.forRoot([
        RouterEffects
    ])
];

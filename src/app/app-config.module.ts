import { NgModule, InjectionToken } from '@angular/core';
import { environment } from '../environments/environment';

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export class AppConfig {
    server_available: boolean;
    apiEndpoint: string;
}

export const APP_DI_CONFIG: AppConfig = {
    server_available: true,
    apiEndpoint: environment.apiEndpoint
};

@NgModule({
    providers: [{
        provide: APP_CONFIG,
        useValue: APP_DI_CONFIG
    }]
})

export class AppConfigModule { }

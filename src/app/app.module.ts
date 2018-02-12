import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// routing
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';

// @ngrx
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { FormsModule } from '@angular/forms';

// reducers
import { effectsModule, reducerProvider, storeModule } from './store/index';
import { HomepageModule } from './homepage/homepage.module';
import { UsersModule } from './users/users.module';
import { AppConfigModule } from './app-config.module';

// log monitor
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';
import { SharedModule } from './shared/shared.module';

export function instrumentOptions() {
    return {
        monitor: useLogMonitor({ visible: false, position: 'right' })
    };
}

@NgModule({
  declarations: [
      AppComponent,
      NotFoundComponent
  ],
  imports: [
      AppConfigModule,
      AppRoutingModule,
      HomepageModule,
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      StoreRouterConnectingModule,
      storeModule,
      effectsModule,
      UsersModule,
      StoreDevtoolsModule.instrument(instrumentOptions),
      StoreLogMonitorModule,
      SharedModule.forRoot(),
  ],
  providers: [
      reducerProvider,
      AppConfigModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

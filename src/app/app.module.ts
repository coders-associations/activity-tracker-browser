import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// routing
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';

// services
import { UserService } from './core/services/user.service';

// @ngrx
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';

// reducers
import { reducers } from './store/app.reducers';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './users/store/users.effects';
import {initialState} from "./store/app.state";


@NgModule({
  declarations: [
      AppComponent,
      NotFoundComponent
  ],
  imports: [
      AppRoutingModule,
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      StoreRouterConnectingModule,
      StoreModule.forRoot(reducers, {
          initialState: initialState
      }),
      EffectsModule.forRoot([
          UserEffects
      ])
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

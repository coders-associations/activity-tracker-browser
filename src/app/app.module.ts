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
import { effectsModule, reducerProvider, storeModule } from './store/index';
import { HomepageModule } from './homepage/homepage.module';


@NgModule({
  declarations: [
      AppComponent,
      NotFoundComponent
  ],
  imports: [
      AppRoutingModule,
      HomepageModule,
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      StoreRouterConnectingModule,
      storeModule,
      effectsModule
  ],
  providers: [
      UserService,
      reducerProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

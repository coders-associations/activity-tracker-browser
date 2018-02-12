import {Component, OnInit} from '@angular/core';
import {State} from "./store/app.state";
import {Store} from "@ngrx/store";
import {AuthenticatedAction} from "./users/store/users.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(private store: Store<State>) {

    }

    public ngOnInit() {
        this.store.dispatch(new AuthenticatedAction());
    }
}

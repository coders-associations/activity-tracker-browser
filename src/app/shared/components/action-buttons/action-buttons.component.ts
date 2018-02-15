import { Component, Input } from '@angular/core';
import { State } from '../../../store/app.state';
import { Store } from '@ngrx/store';
import { SignOutAction } from '../../../users/store/users.actions';
import { ResetActivitiesStateAction } from '../../../dashboard/store/dashboard.actions';


@Component({
  selector: 'app-action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.scss']
})
export class ActionButtonsComponent {

    @Input() noAction: boolean;

    constructor(private store: Store<State>) {
    }

    logout() {
        this.store.dispatch(new SignOutAction());
        this.store.dispatch(new ResetActivitiesStateAction());
    }
}

import { Component, Input, OnInit } from '@angular/core';
import { SideNavItemModel } from '../../models/side-nav-item';
import * as RouterActions from '../../../store/router.actions';
import { Store } from '@ngrx/store';
import { State } from '../../../store/app.state';

@Component({
  selector: 'app-side-nav-item',
  templateUrl: './side-nav-item.component.html',
  styleUrls: ['./side-nav-item.component.scss']
})
export class SideNavItemComponent {
    @Input() item: SideNavItemModel;

    constructor(private store: Store<State>) {

    }

    goToItem() {
        this.store.dispatch(new RouterActions.Go({
            path: [`/dashboard/${this.item.link}`]
        }));
    }
}

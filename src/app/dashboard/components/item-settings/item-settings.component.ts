import { Component, EventEmitter, Output } from '@angular/core';
import { State } from '../../../store/app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-item-settings',
  templateUrl: './item-settings.component.html',
  styleUrls: ['./item-settings.component.scss']
})
export class ItemSettingsComponent {

    @Output() goToSettings = new EventEmitter<any>();

    constructor(private store: Store<State>) { }
}

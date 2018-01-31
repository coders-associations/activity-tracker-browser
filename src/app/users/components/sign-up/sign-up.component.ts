import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {SignUpAction} from "../../store/users.actions";
import {State} from "../../../store/app.state";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
    myGroup: FormGroup;

    constructor(private store: Store<State>) {
        this.myGroup = new FormGroup({
            first_name: new FormControl(),
            last_name: new FormControl(),
            email: new FormControl(),
            password: new FormControl(),
            password_recheck: new FormControl(),
        });
    }

    /**
     * Submit the authentication form.
     * @method submit
     */
    public submit() {
        // get email and password values
        const firstName: string = this.myGroup.get('first_name').value.trim();
        const lastName: string = this.myGroup.get('last_name').value.trim();
        const email: string = this.myGroup.get('email').value.trim();
        const password: string = this.myGroup.get('password').value.trim();

        // set payload
        const user = {
            firstName,
            lastName,
            email,
            password
        };

        // dispatch AuthenticationAction and pass in payload
        this.store.dispatch(new SignUpAction({ user }));
    }

    ngOnInit() {
    }

}

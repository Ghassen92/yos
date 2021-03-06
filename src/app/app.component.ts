import { Component } from '@angular/core';

import { AccountService } from './_services';
import { User } from './_models';

// tslint:disable-next-line:component-selector
// @ts-ignore
@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    user: User;

    constructor(private accountService: AccountService) {
        this.accountService.user.subscribe(x => this.user = x);
    }

    logout() {
        this.accountService.logout();
    }
}

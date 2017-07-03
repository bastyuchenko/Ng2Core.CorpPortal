import { Component } from '@angular/core';
import { AccountManagementService } from './../account-management/account-management.service';
import { ApplicationUser } from './../models/application-user';

@Component({
    templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
    userInfo: ApplicationUser;

    constructor(private service: AccountManagementService) { }

    // ngOnInit() {
    //     this.userInfo = this.service.userInfo;
    //     this.service.change();
    // }
}
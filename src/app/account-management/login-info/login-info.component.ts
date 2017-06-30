import { Component, OnInit, Input } from '@angular/core';
import { AccountManagementService } from './../account-management.service';
import { ApplicationUser } from './../../models/account'

@Component({
    selector: 'login-info',
    templateUrl: './login-info.component.html',
    styles: ['./login-info.component.css']
})

export class LoginInfoComponent {
    userInfo: ApplicationUser;

    constructor(private service: AccountManagementService) {
        this.service._userInfo.subscribe((data:ApplicationUser):void => {
            this.userInfo = data;
        });
    }

    logout():void{
        this.service.logout()
        .subscribe((data):void=>{
            if(data.status===200)
            {
                this.service.setUser(new ApplicationUser());
            }
        });
    }
}
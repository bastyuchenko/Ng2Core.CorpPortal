import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from "@angular/core";
import { NgForm, AbstractControl } from '@angular/forms';
import { ApplicationUser } from "./../../models/application-user"
import { LoginModel } from "./../login-model"
import { AccountManagementService } from "./../account-management.service"
import { AlertService } from './../../shared/alert/alert.service'

@Component({
    selector: "login-account",
    templateUrl: "./login-account.component.html",
    styleUrls: ["login-account.component.css"]
})

export class LoginAccountComponent {

    private model: LoginModel = new LoginModel();

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountManagementService,
         private alertService: AlertService
    ) { }

    login(): void {
        this.accountService.loginAccount(this.model).subscribe(
            (data): void => {
                this.router.navigate(['/welcome']);
            });
    }
}
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from "@angular/core";
import { NgForm, AbstractControl } from '@angular/forms';
import { ApplicationUser } from "./../../models/application-user"
import { RegisterModel } from "./../register-model"
import { AccountManagementService } from "./../account-management.service"
import { AlertService } from './../../shared/alert/alert.service'

@Component({
    selector: "register-account",
    templateUrl: "./register-account.component.html",
    styleUrls: ["register-account.component.css"]
})

export class RegisterAccountComponent implements OnInit {

    private model: RegisterModel = new RegisterModel();

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountManagementService,
        private alertService: AlertService
    ) { }

    ngOnInit() {

    }

    register(): void {

        this.accountService.registerAccount(this.model).subscribe(
            (data): void => {
                this.alertService.addAlert({
                    id: 1,
                    type: 'success',
                    message: 'User has been registered successfully',
                });
            },
            (error): void => {
                this.alertService.addAlert({
                    id: 1,
                    type: 'danger',
                    message: error.text(),
                });
            }
        );
    }
}
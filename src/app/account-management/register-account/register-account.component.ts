import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from "@angular/core";
import { NgForm, AbstractControl } from '@angular/forms';
import { ApplicationUser } from "./../../models/application-user"
import { RegisterModel } from "./../register-model"
import { AccountManagementService } from "./../account-management.service"

@Component({
    selector: "register-account",
    templateUrl: "./register-account.component.html",
    styleUrls: ["register-account.component.css"]
})

export class RegisterAccountComponent implements OnInit {

    private model: RegisterModel = new RegisterModel();
    private alerts: any = [];

    private updating = {
        country: false,
        links: false,
    }

    private patterns = {
        Url: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
        Img: /.*\.png/,
        Text: /^[a-zA-Z ]*$/
    }

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountManagementService
    ) { }

    ngOnInit(){

    }

    register(): void {

        this.accountService.registerAccount(this.model).subscribe(
            (data): void => {
                this.updating.country = false;
                this.alerts.push({
                    type: 'success',
                    msg: `Country Item has been updated successfully.`,
                });
            },
            (error): void => {
                this.alerts.push({
                    type: 'danger',
                    msg: error,
                });
            },
            () => {
                window.scrollTo(0, 0);
                this.updating.country = false;
            }
        );
    }
}
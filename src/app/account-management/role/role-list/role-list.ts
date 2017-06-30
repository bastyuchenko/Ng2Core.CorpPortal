import { Component } from "@angular/core"
import { IRole } from "./../../../models/role"
import { AccountManagementService } from "./../../account-management.service"

@Component({
    selector: "role-list",
    templateUrl: "./role-list.html"
})

export class RoleListComponent {
    constructor(private accountService: AccountManagementService) {
    }

    errorMessage: string = '';
    roleList: IRole[];

    ngOnInit(): void {
        this.accountService.getAllRoles().subscribe(
            (data) => {
                this.roleList = <IRole[]>data;
            },
            (error): void => {
                console.log('Something went wrong! Get roles failed!');
            });
    };
}
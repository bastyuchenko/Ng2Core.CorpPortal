import { Component } from "@angular/core"
import { Role } from "./../../../models/role"
import { AccountManagementService } from "./../../account-management.service"

@Component({
    selector: "role-list",
    templateUrl: "./role-list.html"
})

export class RoleListComponent {
    constructor(private accountService: AccountManagementService) {
    }

    errorMessage: string = '';
    roleList: Role[];

    ngOnInit(): void {
        this.accountService.getAllRoles().subscribe(
            (data) => {
                this.roleList = <Role[]>data;
            },
            (error): void => {
                console.log('Something went wrong! Get roles failed!');
            });
    };
}
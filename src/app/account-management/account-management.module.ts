import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module'
import { RegisterAccountComponent } from './register-account/register-account.component';
import { LoginAccountComponent } from './login-account/login-account.component';
import { RoleListComponent } from './role/role-list/role-list';
import { LoginInfoComponent } from './login-info/login-info.component'
import { AccountManagementService } from './account-management.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from './../shared/alert/alert.service'


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        SharedModule,
        NgbModule,
        RouterModule.forChild([
            { path: 'register-account', component: RegisterAccountComponent },
            { path: 'login-account', component: LoginAccountComponent },
            { path: 'role-list', component: RoleListComponent },
        ])
    ],
    declarations: [
        RoleListComponent,
        LoginAccountComponent,
        RegisterAccountComponent,
        LoginInfoComponent
    ],
    exports: [
        RoleListComponent,
        LoginAccountComponent,
        RegisterAccountComponent,
        LoginInfoComponent
    ],
    providers: [
        AccountManagementService,
        AlertService
    ]
})

export class AccountManagementModule { }

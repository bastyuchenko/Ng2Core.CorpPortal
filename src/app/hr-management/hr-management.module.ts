﻿import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module'
import { CandidateListComponent } from './candidate/candidate-list/candidate-list';
import { HrService } from './hr-management.service';
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
            { path: 'candidate-list', component: CandidateListComponent },
        ])
    ],
    declarations: [
        CandidateListComponent
    ],
    exports: [
        CandidateListComponent
    ],
    providers: [
        HrService,
        AlertService
    ]
})

export class HrManagementModule { }

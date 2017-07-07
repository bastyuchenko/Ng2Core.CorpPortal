import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module'
import { CandidateListComponent } from './candidate/candidate-list/candidate-list';
import { CandidateEditItemComponent } from './candidate/candidate-edit-item/candidate-edit-item';
import { ProjectListComponent } from './project/project-list/project-list';
import { ProjectEditItemComponent } from './project/project-edit-item/project-edit-item';
import { SkillListComponent } from './skill/skill-list/skill-list';
import { SkillEditItemComponent } from './skill/skill-edit-item/skill-edit-item';
import { VacancyListComponent } from './vacancy/vacancy-list/vacancy-list';
import { VacancyEditItemComponent } from './vacancy/vacancy-edit-item/vacancy-edit-item';
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
            { path: 'candidate-edit-item', component: CandidateEditItemComponent },
            { path: 'project-list', component: ProjectListComponent },
            { path: 'project-edit-item', component: ProjectEditItemComponent },
            { path: 'skill-list', component: SkillListComponent },
            { path: 'skill-edit-item', component: SkillEditItemComponent },
            { path: 'vacancy-list', component: SkillListComponent },
            { path: 'vacancy-edit-item', component: SkillEditItemComponent },
        ])
    ],
    declarations: [
        CandidateListComponent,
        CandidateEditItemComponent,

        ProjectListComponent,
        ProjectEditItemComponent,

        SkillListComponent,
        SkillEditItemComponent,

        VacancyListComponent,
        VacancyEditItemComponent
    ],
    exports: [
        CandidateListComponent,
        CandidateEditItemComponent,

        ProjectListComponent,
        ProjectEditItemComponent,

        SkillListComponent,
        SkillEditItemComponent,

        VacancyListComponent,
        VacancyEditItemComponent
    ],
    providers: [
        HrService,
        AlertService
    ]
})

export class HrManagementModule { }

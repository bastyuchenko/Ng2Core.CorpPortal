import { Component, OnInit } from "@angular/core"
import { HrService } from "./../../hr-management.service"
import { Skill } from "./../../../models/skill"
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AlertService } from './../../../shared/alert/alert.service'



@Component({
    selector: "skill-edit",
    templateUrl: "./skill-edit-item.html",
    styleUrls: ["skill-edit-item.css"]
})

export class SkillEditItemComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private service: HrService,
        private router: Router,
        private alertService: AlertService) {
    }

    private model: Skill = new Skill();
    private id: number;
    private sub: any;

    ngOnInit() {
        if (this.id > 0) {
            this.service.getSkill(this.id).subscribe(
                (data) => {
                    this.model = <Skill>data;
                },
                (error): void => {
                    console.log('Something went wrong! Get skills failed!');
                });
        }
    }

    save(): void {
        if (this.model.skillId > 0) {
            this.service.updateSkill(this.model).subscribe(
                (data) => {

                },
                (error): void => {
                    this.alertService.addAlert({
                        id: 1,
                        type: 'danger',
                        message: error.text(),
                    });
                });
        }
        else {
            this.service.createSkill(this.model).subscribe(
                (data) => {

                },
                (error): void => {
                    this.alertService.addAlert({
                        id: 1,
                        type: 'danger',
                        message: error.text(),
                    });
                });
        }
    }

    cancel(): void {
        this.router.navigate(['/skill-list']);
    }

}
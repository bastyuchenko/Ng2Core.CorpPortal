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

    ngOnInit() {
        console.log(this.route.snapshot.params['id']);
    }

    save(): void {
        this.service.createSkill(this.model).subscribe(
            (data) => {
                this.router.navigate(['/skill-list']);
            },
            (error): void => {
                this.alertService.addAlert({
                    id: 1,
                    type: 'danger',
                    message: error.text(),
                });
            });
    }

    cancel(): void {
        this.router.navigate(['/skill-list']);
    }

}
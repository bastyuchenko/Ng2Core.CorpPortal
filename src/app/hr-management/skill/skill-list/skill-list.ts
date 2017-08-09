import { Component, OnInit } from "@angular/core"
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HrService } from "./../../hr-management.service"
import { Skill } from "./../../../models/skill"
import { AlertService } from './../../../shared/alert/alert.service'

@Component({
    selector: "proejct-list",
    templateUrl: "./skill-list.html",
    styleUrls: ["skill-list.css"]
})

export class SkillListComponent implements OnInit {
    constructor(private service: HrService,
        private route: ActivatedRoute,
        private router: Router,
        private alertService: AlertService) {
    }
    private skillsList: Skill[];

    ngOnInit(): void {
        this.service.getSkills().subscribe(
            (data) => {
                this.skillsList = <Skill[]>data;
            },
            (error): void => {
                console.log('Something went wrong! Get skills failed!');
            });
    }

    moveToCreateForm(): void {
        this.router.navigate(['/skill-edit-item']);
    }

    deleteItem(item): void {
        this.service.deleteSkill(item.SkillId).subscribe(
            (data) => {
                // this.router.navigate(['/skill-list']);
                var index: number = this.skillsList.indexOf(item);
                if (index !== -1) {
                    this.skillsList.splice(index, 1);
                }
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
import { Component, OnInit } from "@angular/core"
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HrService } from "./../../hr-management.service"
import { Skill } from "./../../../models/skill"

@Component({
    selector: "proejct-list",
    templateUrl: "./skill-list.html",
    styleUrls: ["skill-list.css"]
})

export class SkillListComponent implements OnInit {
    constructor(private service: HrService,
        private route: ActivatedRoute,
        private router: Router, ) {
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

}
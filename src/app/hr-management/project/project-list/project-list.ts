import { Component, OnInit } from "@angular/core"
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HrService } from "./../../hr-management.service"
import { Project } from "./../../../models/project"

@Component({
    selector: "proejct-list",
    templateUrl: "./project-list.html",
    styleUrls: ["project-list.css"]
})

export class ProjectListComponent implements OnInit {
    constructor(private service: HrService,
        private route: ActivatedRoute,
        private router: Router, ) {
    }
    private projectsList: Project[];

    ngOnInit(): void {
        this.service.getProjects().subscribe(
            (data) => {
                this.projectsList = <Project[]>data;
            },
            (error): void => {
                console.log('Something went wrong! Get projects failed!');
            });
    }

    moveToCreateForm(): void {
        this.router.navigate(['/project-edit-item']);
    }

}
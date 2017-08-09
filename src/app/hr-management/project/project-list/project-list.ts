import { Component, OnInit } from "@angular/core"
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HrService } from "./../../hr-management.service"
import { Project } from "./../../../models/project"
import { AlertService } from './../../../shared/alert/alert.service'


@Component({
    selector: "proejct-list",
    templateUrl: "./project-list.html",
    styleUrls: ["project-list.css"]
})

export class ProjectListComponent implements OnInit {
    constructor(private service: HrService,
        private route: ActivatedRoute,
        private router: Router,
        private alertService: AlertService) {
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

    deleteItem(item): void {
        this.service.deleteProject(item.ProjectId).subscribe(
            (data) => {
                // this.router.navigate(['/skill-list']);
                var index: number = this.projectsList.indexOf(item);
                if (index !== -1) {
                    this.projectsList.splice(index, 1);
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

    moveToCreateForm(): void {
        this.router.navigate(['/project-edit-item']);
    }

}
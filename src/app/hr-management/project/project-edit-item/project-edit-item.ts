import { Component, OnInit } from "@angular/core"
import { HrService } from "./../../hr-management.service"
import { Project } from "./../../../models/project"
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AlertService } from './../../../shared/alert/alert.service'


@Component({
    selector: "project-edit",
    templateUrl: "./project-edit-item.html",
    styleUrls: ["project-edit-item.css"]
})

export class ProjectEditItemComponent implements OnInit {
    constructor(
        private service: HrService,
        private router: Router,
        private route: ActivatedRoute,
        private alertService: AlertService) {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
        });
    }

    private model: Project = new Project();
    private id: number;
    private sub: any;

    ngOnInit(): void {
        if (this.id > 0) {


            this.service.getProject(this.id).subscribe(
                (data) => {
                    this.model = <Project>data;
                },
                (error): void => {
                    console.log('Something went wrong! Get skills failed!');
                });
        }
    }


    save(): void {
        if (this.model.projectId > 0) {
            this.service.updateProject(this.model).subscribe(
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
            this.service.createProject(this.model).subscribe(
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
        this.router.navigate(['/project-list']);
    }



}
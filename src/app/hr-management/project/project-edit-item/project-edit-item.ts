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

export class ProjectEditItemComponent {
    constructor(
        private service: HrService,
        private router: Router,
        private alertService: AlertService) {
    }

    private model: Project = new Project(); 
    

    save():void{
        this.service.createProject(this.model).subscribe(
            (data) => {
                 this.router.navigate(['/project-list']);
            },
            (error): void => {
                this.alertService.addAlert({
                    id: 1,
                    type: 'danger',
                    message: error.text(),
                });
            });
    }
    
    cancel():void{
        this.router.navigate(['/project-list']);
    }



}
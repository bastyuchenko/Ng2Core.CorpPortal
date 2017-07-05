import { Component, OnInit } from "@angular/core"
import { HrService } from "./../../hr-management.service"
import { Project } from "./../../../models/project"

@Component({
    selector: "project-edit",
    templateUrl: "./project-edit-item.html",
    styleUrls: ["project-edit-item.css"]
})

export class ProjectEditItemComponent {
    constructor(private service: HrService) {
    }

    private model: Project = new Project(); 
    

    save():void{
        this.service.createProject(this.model).subscribe(
            (data) => {
               
            },
            (error): void => {
                console.log('Something went wrong! Get projects failed!');
            });
    }

}
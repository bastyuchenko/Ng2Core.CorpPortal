import { Component, OnInit } from "@angular/core"
import { HrService } from "./../../hr-management.service"
import { Skill } from "./../../../models/skill"

@Component({
    selector: "skill-edit",
    templateUrl: "./skill-edit-item.html",
    styleUrls: ["skill-edit-item.css"]
})

export class SkillEditItemComponent {
    constructor(private service: HrService) {
    }

    private model: Skill = new Skill(); 
    

    save():void{
        this.service.createSkill(this.model).subscribe(
            (data) => {
               
            },
            (error): void => {
                console.log('Something went wrong! Get skills failed!');
            });
    }

}
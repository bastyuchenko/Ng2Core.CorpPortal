import { Component, OnInit } from "@angular/core"
import { HrService } from "./../../hr-management.service"
import { Candidate } from "./../../../models/candidate"

@Component({
    selector: "candidate-edit",
    templateUrl: "./candidate-edit-item.html",
    styleUrls: ["candidate-edit-item.css"]
})

export class CandidateEditItemComponent {
    constructor(private service: HrService) {
    }

    private model: Candidate = new Candidate(); 
    

    save():void{
        this.service.createCandidate(this.model).subscribe(
            (data) => {
               
            },
            (error): void => {
                console.log('Something went wrong! Get candidates failed!');
            });
    }

}
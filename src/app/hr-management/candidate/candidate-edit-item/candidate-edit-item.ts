import { Component, OnInit } from "@angular/core"
import { HrService } from "./../../hr-management.service"
import { Candidate } from "./../../../models/candidate"
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AlertService } from './../../../shared/alert/alert.service'

@Component({
    selector: "candidate-edit",
    templateUrl: "./candidate-edit-item.html",
    styleUrls: ["candidate-edit-item.css"]
})

export class CandidateEditItemComponent {
    constructor(
        private service: HrService,
        private router: Router,
        private alertService: AlertService) {
    }

    private model: Candidate = new Candidate(); 
    

    save():void{
        this.service.createCandidate(this.model).subscribe(
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
    
    cancel():void{
        this.router.navigate(['/candidate-list']);
    }

}
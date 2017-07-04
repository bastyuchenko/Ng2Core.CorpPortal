import { Component, OnInit } from "@angular/core"
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HrService } from "./../../hr-management.service"
import { Candidate } from "./../../../models/candidate"

@Component({
    selector: "candidate-list",
    templateUrl: "./candidate-list.html",
    styleUrls: ["candidate-list.css"]
})

export class CandidateListComponent implements OnInit {
    constructor(private service: HrService,
        private route: ActivatedRoute,
        private router: Router, ) {
    }
    private candidatesList: Candidate[];

    ngOnInit(): void {
        this.service.getCandidates().subscribe(
            (data) => {
                this.candidatesList = <Candidate[]>data;
            },
            (error): void => {
                console.log('Something went wrong! Get candidates failed!');
            });
    }

    moveToCreateForm(): void {
        this.router.navigate(['/candidate-edit-item']);
    }

}
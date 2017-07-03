import { Component, OnInit } from "@angular/core"
import { HrService } from "./../../hr-management.service"
import { ICandidate } from "./../../../models/candidate"

@Component({
    selector: "candidate-list",
    templateUrl: "./candidate-list.html"
})

export class CandidateListComponent implements OnInit {
    constructor(private service: HrService) {
    }
    private candidatesList: ICandidate[];

    ngOnInit(): void {
        this.service.getCandidates().subscribe(
            (data) => {
                this.candidatesList = <ICandidate[]>data;
            },
            (error): void => {
                console.log('Something went wrong! Get candidates failed!');
            });
    }

}
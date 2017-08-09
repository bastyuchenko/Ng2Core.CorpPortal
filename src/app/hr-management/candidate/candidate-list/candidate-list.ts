import { Component, OnInit } from "@angular/core"
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HrService } from "./../../hr-management.service"
import { Candidate } from "./../../../models/candidate"
import { AlertService } from './../../../shared/alert/alert.service'


@Component({
    selector: "candidate-list",
    templateUrl: "./candidate-list.html",
    styleUrls: ["candidate-list.css"]
})

export class CandidateListComponent implements OnInit {
    constructor(private service: HrService,
        private route: ActivatedRoute,
        private router: Router,
        private alertService: AlertService ) {
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

    deleteItem(item): void {
        this.service.deleteCandidate(item.CandidatId).subscribe(
            (data) => {
                // this.router.navigate(['/skill-list']);
                var index: number = this.candidatesList.indexOf(item);
                if (index !== -1) {
                    this.candidatesList.splice(index, 1);
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
        this.router.navigate(['/candidate-edit-item']);
    }

}
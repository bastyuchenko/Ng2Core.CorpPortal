import { Component, OnInit } from "@angular/core"
import { HrService } from "./../../hr-management.service"
import { Candidate } from "./../../../models/candidate"
import { Vacancy } from "./../../../models/vacancy"
import { Skill } from "./../../../models/skill"
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AlertService } from './../../../shared/alert/alert.service'

@Component({
    selector: "candidate-edit",
    templateUrl: "./candidate-edit-item.html",
    styleUrls: ["candidate-edit-item.css"]
})

export class CandidateEditItemComponent implements OnInit {
    constructor(
        private service: HrService,
        private router: Router,
        private route: ActivatedRoute,
        private alertService: AlertService) {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
        });
    }

    private model: Candidate = new Candidate();
    private vacanciesOptions: Vacancy[] = new Array<Vacancy>();
    private id: number;
    private sub: any;
    private skill: Skill;

    ngOnInit(): void {
        this.service.getVacancies().subscribe(
            (data) => {
                this.vacanciesOptions = <Vacancy[]>data;


                if (this.id > 0) {


                    this.service.getCandidate(this.id).subscribe(
                        (data) => {
                            this.model = <Candidate>data;
                        },
                        (error): void => {
                            console.log('Something went wrong! Get skills failed!');
                        });
                }




            },
            (error): void => {
                console.log('Something went wrong! Get vacancies failed!');
            });
    }


    save(): void {
        if (this.model.candidatId > 0) {
            this.service.updateCandidate(this.model).subscribe(
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
        else  {
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
    }

    cancel(): void {
        this.router.navigate(['/candidate-list']);
    }

}
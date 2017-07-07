import { Component, OnInit } from "@angular/core"
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HrService } from "./../../hr-management.service"
import { Vacancy } from "./../../../models/vacancy"

@Component({
    selector: "vacancy-list",
    templateUrl: "./vacancy-list.html",
    styleUrls: ["vacancy-list.css"]
})

export class VacancyListComponent implements OnInit {
    constructor(private service: HrService,
        private route: ActivatedRoute,
        private router: Router, ) {
    }
    private vacanciesList: Vacancy[];

    ngOnInit(): void {
        this.service.getVacancies().subscribe(
            (data) => {
                this.vacanciesList = <Vacancy[]>data;
            },
            (error): void => {
                console.log('Something went wrong! Get vacancies failed!');
            });
    }

    moveToCreateForm(): void {
        this.router.navigate(['/vacancy-edit-item']);
    }

}
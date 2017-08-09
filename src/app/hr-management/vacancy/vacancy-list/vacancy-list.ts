import { Component, OnInit } from "@angular/core"
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HrService } from "./../../hr-management.service"
import { Vacancy } from "./../../../models/vacancy"
import { AlertService } from './../../../shared/alert/alert.service'


@Component({
    selector: "vacancy-list",
    templateUrl: "./vacancy-list.html",
    styleUrls: ["vacancy-list.css"]
})

export class VacancyListComponent implements OnInit {
    constructor(private service: HrService,
        private route: ActivatedRoute,
        private router: Router,
        private alertService: AlertService) {
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

    deleteItem(item): void {
        this.service.deleteVacancy(item.vacancyId).subscribe(
            (data) => {
                // this.router.navigate(['/skill-list']);
                var index: number = this.vacanciesList.indexOf(item);
                if (index !== -1) {
                    this.vacanciesList.splice(index, 1);
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
        this.router.navigate(['/vacancy-edit-item']);
    }

}
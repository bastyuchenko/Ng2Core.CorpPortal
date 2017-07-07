import { Component, OnInit } from "@angular/core"
import { HrService } from "./../../hr-management.service"
import { Vacancy } from "./../../../models/vacancy"
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AlertService } from './../../../shared/alert/alert.service'

@Component({
    selector: "vacancy-edit",
    templateUrl: "./vacancy-edit-item.html",
    styleUrls: ["vacancy-edit-item.css"]
})

export class VacancyEditItemComponent {
    constructor(
        private service: HrService,
        private router: Router,
        private alertService: AlertService) {
    }

    private model: Vacancy = new Vacancy(); 
    

    save():void{
        this.service.createVacancy(this.model).subscribe(
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
        this.router.navigate(['/vacancy-list']);
    }

}
import { Component, OnInit } from "@angular/core"
import { HrService } from "./../../hr-management.service"
import { Vacancy } from "./../../../models/vacancy"
import { Project } from "./../../../models/project"
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AlertService } from './../../../shared/alert/alert.service'

@Component({
    selector: "vacancy-edit",
    templateUrl: "./vacancy-edit-item.html",
    styleUrls: ["vacancy-edit-item.css"]
})

export class VacancyEditItemComponent implements OnInit {
    constructor(
        private service: HrService,
        private router: Router,
        private route: ActivatedRoute,
        private alertService: AlertService) {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
        });
    }
    model2;
    private model: Vacancy = new Vacancy();
    private projectsOptions: Project[] = new Array<Project>();
    private id: number;
    private sub: any;

    ngOnInit(): void {
        this.service.getProjects().subscribe(
            (data) => {
                this.projectsOptions = <Project[]>data;


                if (this.id > 0) {


                    this.service.getVacancy(this.id).subscribe(
                        (data) => {
                            this.model = <Vacancy>data;
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
        this.model.DueDate = new Date();
        if (this.model.VacancyId > 0) {
            this.service.updateVacancy(this.model).subscribe(
                (data) => {
                    this.router.navigate(['/vacancy-list']);
                },
                (error): void => {
                    this.alertService.addAlert({
                        id: 1,
                        type: 'danger',
                        message: error.text(),
                    });
                });
        }
        else {
            this.service.createVacancy(this.model).subscribe(
                (data) => {
                    this.router.navigate(['/vacancy-list']);
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
        this.router.navigate(['/vacancy-list']);
    }

}
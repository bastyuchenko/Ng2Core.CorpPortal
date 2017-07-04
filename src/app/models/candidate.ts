import { ApplicationUser } from "./application-user";
import { IVacancy } from "./vacancy";

export class Candidate {
    CandidatId: number;
    FirstName: string;
    LastName: string;

    VacancyKey: number;
    Vacancy: IVacancy;
}
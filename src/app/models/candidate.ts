import { ApplicationUser } from "./application-user";
import { Vacancy } from "./vacancy";

export class Candidate {
    CandidatId: number;
    FirstName: string;
    LastName: string;

    VacancyKey: number;
    Vacancy: Vacancy;
}
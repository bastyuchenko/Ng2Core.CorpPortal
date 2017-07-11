import { ApplicationUser } from "./application-user";
import { Vacancy } from "./vacancy";

export class Candidate {
    candidatId: number;
    firstName: string;
    lastName: string;

    vacancyKey: number;
    vacancy: Vacancy;
}
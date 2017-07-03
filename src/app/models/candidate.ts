import { ApplicationUser } from "./application-user";
import { IVacancy } from "./vacancy";

export interface ICandidate
{
         CandidatId:number;
         UserId :string;
         User:ApplicationUser;

         VacancyKey:number;
         Vacancy:IVacancy;
}
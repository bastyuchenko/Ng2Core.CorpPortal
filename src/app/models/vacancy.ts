import { IProject } from "./project";
import { ICandidate } from "./candidate";
import { ISkillVacancy } from "./skill-vacancy";


export interface IVacancy {
    VacancyId: number;
    VacancyTitle: string;
    DueDate: Date;
    SkillVacancy: ISkillVacancy[];
    Candidates: ICandidate[];
    ProjectKey: number;
    Project: IProject;
}
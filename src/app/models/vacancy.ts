import { IProject } from "./project";
import { Candidate } from "./candidate";
import { ISkillVacancy } from "./skill-vacancy";


export interface IVacancy {
    VacancyId: number;
    VacancyTitle: string;
    DueDate: Date;
    SkillVacancy: ISkillVacancy[];
    Candidates: Candidate[];
    ProjectKey: number;
    Project: IProject;
}
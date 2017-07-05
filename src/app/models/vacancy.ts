import { Project } from "./project";
import { Candidate } from "./candidate";
import { SkillVacancy } from "./skill-vacancy";


export class Vacancy {
    VacancyId: number;
    VacancyTitle: string;
    DueDate: Date;
    SkillVacancy: SkillVacancy[];
    Candidates: Candidate[];
    ProjectKey: number;
    Project: Project;
}
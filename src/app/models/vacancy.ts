import { Project } from "./project";
import { Candidate } from "./candidate";
import { SkillVacancy } from "./skill-vacancy";


export class Vacancy {
    vacancyId: number;
    vacancyTitle: string;
    dueDate: Date;
    skillVacancy: SkillVacancy[];
    candidates: Candidate[];
    projectKey: number;
    project: Project;
}
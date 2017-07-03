import { ISkillVacancy } from "./skill-vacancy";

export interface ISkill {
     SkillId: number;
     Title: number;
     SkillVacancies: ISkillVacancy[];
}
import { IVacancy } from "./vacancy";
import { ISkill } from "./skill";

export interface ISkillVacancy {
     SkillVacancyId: number;
     SkillKey: number;
     Skill: ISkill;
     VacancyId: number;
     Vacancy: IVacancy;
}
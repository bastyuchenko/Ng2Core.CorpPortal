import { IVacancy } from "./vacancy";
import { IRoleAssignment } from "./role-assignment";

export interface IProject {
    ProjectId: number;
    Title: string;
    Content: string;
    RoleAssignments: IRoleAssignment[];
    Vacancies: IVacancy[];
}
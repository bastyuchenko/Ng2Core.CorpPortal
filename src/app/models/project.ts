import { Vacancy } from "./vacancy";
import { RoleAssignment } from "./role-assignment";

export class Project {
    ProjectId: number;
    Title: string;
    Content: string;
    RoleAssignments: RoleAssignment[];
    Vacancies: Vacancy[];
}
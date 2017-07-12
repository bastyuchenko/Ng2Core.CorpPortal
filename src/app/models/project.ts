import { Vacancy } from "./vacancy";
import { RoleAssignment } from "./role-assignment";

export class Project {
    projectId: number;
    title: string;
    content: string;
    roleAssignments: RoleAssignment[];
    vacancies: Vacancy[];
}
import { Employee } from "./employee";
import { Project } from "./project";

export class RoleAssignment {
     roleAssignmentId: number;
     position: string;
     capacity: number;
     duration: number;
     groupLeadId: number;
     groupLead: Employee;
     directMgrId: number;
     directMgr: Employee;
     employeeId: number;
     employee: Employee;
     projectId: number;
     project: Project;
}
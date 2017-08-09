import { Employee } from "./employee";
import { Project } from "./project";

export class RoleAssignment {
     RoleAssignmentId: number;
     Position: string;
     Capacity: number;
     Duration: number;
     GroupLeadId: number;
     GroupLead: Employee;
     DirectMgrId: number;
     DirectMgr: Employee;
     EmployeeId: number;
     Employee: Employee;
     ProjectId: number;
     Project: Project;
}
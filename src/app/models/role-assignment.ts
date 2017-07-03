import { IEmployee } from "./employee";
import { IProject } from "./project";

export interface IRoleAssignment {
     RoleAssignmentId: number;
     Position: string;
     Capacity: number;
     Duration: number;
     GroupLeadId: number;
     GroupLead: IEmployee;
     DirectMgrId: number;
     DirectMgr: IEmployee;
     EmployeeId: number;
     Employee: IEmployee;
     ProjectId: number;
     Project: IProject;
}
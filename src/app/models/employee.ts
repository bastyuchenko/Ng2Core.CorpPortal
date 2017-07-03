import { ApplicationUser } from "./application-user";
import { IRoleAssignment } from "./role-assignment";


export interface IEmployee {
     EmployeeId: number;
     UserId: string;
     User: ApplicationUser;
     RoleAssignmentsGroupLead: IRoleAssignment[];
     RoleAssignmentsDirectMgr: IRoleAssignment[];
     RoleAssignmentsEmployee: IRoleAssignment[];
     Salary: number;
}
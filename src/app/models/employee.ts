import { ApplicationUser } from "./application-user";
import { RoleAssignment } from "./role-assignment";


export class Employee {
     EmployeeId: number;
     UserId: string;
     User: ApplicationUser;
     RoleAssignmentsGroupLead: RoleAssignment[];
     RoleAssignmentsDirectMgr: RoleAssignment[];
     RoleAssignmentsEmployee: RoleAssignment[];
     Salary: number;
}
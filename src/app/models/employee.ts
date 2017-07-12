import { ApplicationUser } from "./application-user";
import { RoleAssignment } from "./role-assignment";


export class Employee {
     employeeId: number;
     userId: string;
     user: ApplicationUser;
     roleAssignmentsGroupLead: RoleAssignment[];
     roleAssignmentsDirectMgr: RoleAssignment[];
     roleAssignmentsEmployee: RoleAssignment[];
     salary: number;
}
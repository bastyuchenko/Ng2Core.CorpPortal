using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Ng2Core.CorpPortal.Models
{
    public class EmployeeDto
    {
        public int EmployeeId { get; set; }
        public string UserId { get; set; }
        //public ApplicationUser User { get; set; }
        public List<RoleAssignmentDto> RoleAssignmentsGroupLead { get; set; }
        public List<RoleAssignmentDto> RoleAssignmentsDirectMgr { get; set; }
        public List<RoleAssignmentDto> RoleAssignmentsEmployee { get; set; }
        public double Salary { get; set; }
    }
}
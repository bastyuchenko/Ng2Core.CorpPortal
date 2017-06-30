using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Ng2Core.CorpPortal.Models
{
    public class Employee
    {
        [Key]
        public int EmployeeId { get; set; }
        public string UserId { get; set; }
        [ForeignKey("UserId")]
        public ApplicationUser User { get; set; }
        [InversePropertyAttribute("GroupLead")]
        public List<RoleAssignment> RoleAssignmentsGroupLead { get; set; }
        [InversePropertyAttribute("DirectMgr")]
        public List<RoleAssignment> RoleAssignmentsDirectMgr { get; set; }
        [InversePropertyAttribute("Employee")]
        public List<RoleAssignment> RoleAssignmentsEmployee { get; set; }
        [NotMappedAttribute]
        public double Salary { get; set; }
    }
}
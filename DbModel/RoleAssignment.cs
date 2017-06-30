using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Ng2Core.CorpPortal.Models
{
    public class RoleAssignment
    {
        [Key]
        public int RoleAssignmentId { get; set; }
        [MaxLength(30)]
        public string Position { get; set; }
        public int Capacity { get; set; }
        public int Duration { get; set; }



        public int GroupLeadId { get; set; }
        [ForeignKey("GroupLeadId")]
        public Employee GroupLead { get; set; }

        public int DirectMgrId { get; set; }
        [ForeignKey("DirectMgrId")]
        public Employee DirectMgr { get; set; }

        public int EmployeeId { get; set; }
        [ForeignKey("EmployeeId")]
        public Employee Employee { get; set; }

        public int ProjectId { get; set; }
        [ForeignKey("ProjectId")]
        public Project Project { get; set; }

    }
}
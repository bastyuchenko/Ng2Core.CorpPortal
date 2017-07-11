using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Ng2Core.CorpPortal.Models
{
    public class RoleAssignmentDto
    {
        public int RoleAssignmentId { get; set; }
        public string Position { get; set; }
        public int Capacity { get; set; }
        public int Duration { get; set; }



        public int GroupLeadId { get; set; }
        public EmployeeDto GroupLead { get; set; }

        public int DirectMgrId { get; set; }
        public EmployeeDto DirectMgr { get; set; }

        public int EmployeeId { get; set; }
        public EmployeeDto Employee { get; set; }

        public int ProjectId { get; set; }
        public ProjectDto Project { get; set; }

    }
}
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Ng2Core.CorpPortal.Models
{
    public class Project
    {
        [Key]
        public int ProjectId { get; set; }
        [MaxLength(100)]
        public string Title { get; set; }
        [MaxLength(200)]
        public string Content { get; set; }

        [InversePropertyAttribute("Project")]
        public List<RoleAssignment> RoleAssignments { get; set; }

        [InverseProperty("Project")]
        public List<Vacancy> Vacancies { get; set; }
    }
}
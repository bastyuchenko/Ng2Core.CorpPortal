using System;
using System.Collections.Generic;
using Ng2Core.CorpPortal.Models;

namespace Ng2Core.CorpPortal.Model
{
    public class ProjectDto
    {
        public int ProjectId { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public List<RoleAssignment> RoleAssignments { get; set; }
        public List<Vacancy> Vacancies { get; set; }
    }
}
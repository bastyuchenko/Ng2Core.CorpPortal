using System;
using System.Collections.Generic;

namespace Ng2Core.CorpPortal.Models
{
    public class ProjectDto
    {
        public int ProjectId { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public List<RoleAssignmentDto> RoleAssignments { get; set; }
        public List<VacancyDto> Vacancies { get; set; }
    }
}
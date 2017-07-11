using System;
using System.Collections.Generic;
using Ng2Core.CorpPortal.Models;

namespace Ng2Core.CorpPortal.Models
{
    public class VacancyDto
    {

        public int VacancyId { get; set; }
        public string VacancyTitle { get; set; }
        public DateTime DueDate { get; set; }

        public List<SkillVacancyDto> SkillVacancy { get; set; }

        public List<CandidateDto> Candidates { get; set; }

        public int ProjectKey { get; set; }

        public ProjectDto Project { get; set; }
    }
}
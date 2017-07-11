using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Ng2Core.CorpPortal.Models
{
    public class SkillVacancyDto
    {
        public int SkillVacancyId { get; set; }

        public int SkillKey { get; set; }
        public SkillDto Skill { get; set; }

        public int VacancyId { get; set; }
        public VacancyDto Vacancy { get; set; }
    }
}
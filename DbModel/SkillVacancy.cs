using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Ng2Core.CorpPortal.Models
{
    public class SkillVacancy
    {
        [Key]
        public int SkillVacancyId { get; set; }

        public int SkillKey { get; set; }
        [ForeignKey("SkillKey")]
        public Skill Skill { get; set; }

        public int VacancyId { get; set; }
        [ForeignKey("VacancyId")]
        public Vacancy Vacancy { get; set; }
    }
}
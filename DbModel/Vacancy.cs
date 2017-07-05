using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Ng2Core.CorpPortal.Models
{
    public class Vacancy
    {
        [Key]
        public int VacancyId { get; set; }
		[MaxLength(200)]
        public string VacancyTitle { get; set; }
		[Column(TypeName="date")]
        public DateTime DueDate { get; set; }

        [InverseProperty("Vacancy")]
        public List<SkillVacancy> SkillVacancy { get; set; }

        [InverseProperty("Vacancy")]
        public List<Candidate> Candidates { get; set; }

        public int ProjectKey { get; set; }
        [ForeignKey("ProjectKey")]
        public Project Project { get; set; }
    }
}
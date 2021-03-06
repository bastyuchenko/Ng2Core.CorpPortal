using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Ng2Core.CorpPortal.Models
{
    public class Skill
    {
        [Key]
        public int SkillId { get; set; }
		[MaxLength(100)]
        public string Title { get; set; }

        [InverseProperty("Skill")]
        public List<SkillVacancy> SkillVacancies { get; set; }
    }
}
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Ng2Core.CorpPortal.Models
{
    public class SkillDto
    {
        public int SkillId { get; set; }
        public string Title { get; set; }
        public List<SkillVacancy> SkillVacancies { get; set; }
    }
}
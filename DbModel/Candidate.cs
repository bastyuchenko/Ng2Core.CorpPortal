using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Ng2Core.CorpPortal.Models
{
    public class Candidate
    {
        [Key]
        public int CandidatId { get; set; }

        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int VacancyKey { get; set; }
        [ForeignKey("VacancyKey")]
        public Vacancy Vacancy { get; set; }
    }
}
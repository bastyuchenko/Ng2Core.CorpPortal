using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Ng2Core.CorpPortal.Models
{
    public class CandidateDto
    {
        public int CandidatId { get; set; }

        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int VacancyKey { get; set; }
        public Vacancy Vacancy { get; set; }
    }
}
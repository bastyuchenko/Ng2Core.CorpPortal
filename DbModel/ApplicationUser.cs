using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Ng2Core.CorpPortal.Models
{
    public class ApplicationUser : IdentityUser
    {
        public DateTime BirthDay { get; set; }
        [InverseProperty("User")]
        public Employee Employee { get; set; }
        [Timestamp]
        public byte[] TimeStamp { get; set; }

        [NotMappedAttribute]
        public bool IsAuthenticated {get;set;}
    }
}

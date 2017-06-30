using System;
using Ng2Core.CorpPortal.Models;

namespace Ng2Core.CorpPortal.Model
{
    public class UserDto
    {
        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public DateTime BirthDay { get; set; }
        public Employee Employee { get; set; }
        public Candidate Candidate { get; set; }
        public byte[] TimeStamp { get; set; }
    }
}
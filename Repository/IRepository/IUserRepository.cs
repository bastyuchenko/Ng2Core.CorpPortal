using System.Collections.Generic;
using Ng2Core.CorpPortal.Models;

namespace Ng2Core.CorpPortal.IRepository
{
    public interface IUserRepository
    {
        List<ApplicationUser> GetAllUsers();
        ApplicationUser GetUser(int id);
        void AddUser(ApplicationUser user);
        void UpdateUser(ApplicationUser user);
        void DeleteUser(int id);

        List<Candidate> GetAllCandidates();

        Candidate GetCandidate(int id);

        void AddCandidate(Candidate user);

        void UpdateCandidate(Candidate user);

        void DeleteCandidate(int id);

        bool Save();
    }
}
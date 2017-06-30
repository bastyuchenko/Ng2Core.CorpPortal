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
        bool Save();
    }
}
using System.Collections.Generic;
using Ng2Core.CorpPortal.Models;

namespace Ng2Core.CorpPortal.IRepository
{
    public interface IProjectRepository
    {
        List<Project> GetAllProjects();

        Project GetProject(int id);

        void AddProject(Project project);

        void UpdateProject(Project project);

        void DeleteProject(int id);

        bool Save();
    }
}
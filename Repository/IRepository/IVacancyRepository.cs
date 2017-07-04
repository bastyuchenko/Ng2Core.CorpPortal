using System.Collections.Generic;
using Ng2Core.CorpPortal.Models;

namespace Ng2Core.CorpPortal.IRepository
{
    public interface IVacancyRepository
    {
        List<Vacancy> GetAllVacancies();

        Vacancy GetVacancy(int id);

        void AddVacancy(Vacancy vacancy);

        void UpdateVacancy(Vacancy vacancy);

        void DeleteVacancy(int id);

        bool Save();
    }
}
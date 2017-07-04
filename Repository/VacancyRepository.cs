using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Ng2Core.CorpPortal.Models;
using Ng2Core.CorpPortal.IRepository;
using System;

namespace Ng2Core.CorpPortal.Repository
{
    public class VacancyRepository : IVacancyRepository
    {
        ApplicationDbContext context = null;
        public VacancyRepository(ApplicationDbContext context)
        {
           this.context = context;
        }

        public List<Vacancy> GetAllVacancies()
        {
            return context.Vacancies.ToList();
        }

        public Vacancy GetVacancy(int id)
        {
            return context.Vacancies.Find(id);
        }

        public void AddVacancy(Vacancy vacancy)
        {
            context.Vacancies.Add(vacancy);
        }

        public void UpdateVacancy(Vacancy vacancy)
        {
            context.Entry(vacancy).State = EntityState.Modified;
        }

        public void DeleteVacancy(int id)
        {
            context.Vacancies.Remove(context.Vacancies.Find(id));
        }

        public bool Save()
        {
            return context.SaveChanges() >= 0;
        }
    }
}
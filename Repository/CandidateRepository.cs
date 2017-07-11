using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Ng2Core.CorpPortal.Models;
using Ng2Core.CorpPortal.IRepository;
using System;

namespace Ng2Core.CorpPortal.Repository
{
    public class CandidateRepository : ICandidateRepository
    {
        ApplicationDbContext context = null;
        public CandidateRepository(ApplicationDbContext context)
        {
           this.context = context;
        }

        public List<CandidateDto> GetAllCandidates()
        {
            return (from c in context.Candidates
                    join v in context.Vacancies on c.VacancyKey equals v.VacancyId
                    select new CandidateDto()
                    {
                        CandidatId = c.CandidatId,
                        FirstName = c.FirstName,
                        LastName = c.LastName,
                        VacancyKey = c.VacancyKey,
                        Vacancy = new VacancyDto(){
                            VacancyTitle = v.VacancyTitle
                        }
                    }).ToList();
        }

        public CandidateDto GetCandidate(int id)
        {
            return (from c in context.Candidates
                    join v in context.Vacancies on c.VacancyKey equals v.VacancyId
                    where c.CandidatId == id
                    select new CandidateDto()
                    {
                        CandidatId = c.CandidatId,
                        FirstName = c.FirstName,
                        LastName = c.LastName,
                        VacancyKey = c.VacancyKey
                    }).FirstOrDefault();
        }

        public void AddCandidate(Candidate user)
        {
            context.Candidates.Add(user);
        }

        public void UpdateCandidate(Candidate user)
        {
            context.Entry(user).State = EntityState.Modified;
        }

        public void DeleteCandidate(int id)
        {
            context.Candidates.Remove(context.Candidates.Find(id));
        }

        public bool Save()
        {
            return context.SaveChanges() >= 0;
        }
    }
}
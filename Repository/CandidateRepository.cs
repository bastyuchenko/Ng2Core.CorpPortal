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

        public List<Candidate> GetAllCandidates()
        {
            return context.Candidates.ToList();
        }

        public Candidate GetCandidate(int id)
        {
            return context.Candidates.Find(id);
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
            context.Users.Remove(context.Users.Find(id));
        }

        public bool Save()
        {
            return context.SaveChanges() >= 0;
        }
    }
}
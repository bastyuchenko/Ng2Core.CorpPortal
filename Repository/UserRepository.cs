using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Ng2Core.CorpPortal.Models;
using Ng2Core.CorpPortal.IRepository;
using System;

namespace Ng2Core.CorpPortal.Repository
{
    public class UserRepository : IUserRepository
    {
        ApplicationDbContext context = null;
        public UserRepository(ApplicationDbContext context)
        {
           this.context = context;
        }

        #region User
        public List<ApplicationUser> GetAllUsers()
        {
            return context.Users.ToList();
        }

        public ApplicationUser GetUser(int id)
        {
            return context.Users.Find(id);
        }

        public void AddUser(ApplicationUser user)
        {
            context.Users.Add(user);
        }

        public void UpdateUser(ApplicationUser user)
        {
            context.Entry(user).State = EntityState.Modified;
        }

        public void DeleteUser(int id)
        {
            context.Users.Remove(context.Users.Find(id));
        }
        #endregion


        #region Candidate
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
        #endregion

        public bool Save()
        {
            return context.SaveChanges() >= 0;
        }
    }
}
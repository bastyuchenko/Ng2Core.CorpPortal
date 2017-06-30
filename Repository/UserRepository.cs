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
        //public UserRepository()
        //{
        //    context = new ApplicationDbContext();
        //}

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

        public bool Save()
        {
            return context.SaveChanges() >= 0;
        }
    }
}
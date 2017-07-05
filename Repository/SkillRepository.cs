using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Ng2Core.CorpPortal.Models;
using Ng2Core.CorpPortal.IRepository;
using System;

namespace Ng2Core.CorpPortal.Repository
{
    public class SkillRepository : ISkillRepository
    {
        ApplicationDbContext context = null;
        public SkillRepository(ApplicationDbContext context)
        {
           this.context = context;
        }

        public List<Skill> GetAllSkills()
        {
            return context.Skills.ToList();
        }

        public Skill GetSkill(int id)
        {
            return context.Skills.Find(id);
        }

        public void AddSkill(Skill skill)
        {
            context.Skills.Add(skill);
        }

        public void UpdateSkill(Skill skill)
        {
            context.Entry(skill).State = EntityState.Modified;
        }

        public void DeleteSkill(int id)
        {
            context.Skills.Remove(context.Skills.Find(id));
        }

        public bool Save()
        {
            return context.SaveChanges() >= 0;
        }
    }
}
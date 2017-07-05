using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Ng2Core.CorpPortal.Models;
using Ng2Core.CorpPortal.IRepository;
using System;

namespace Ng2Core.CorpPortal.Repository
{
    public class ProjectRepository : IProjectRepository
    {
        ApplicationDbContext context = null;
        public ProjectRepository(ApplicationDbContext context)
        {
           this.context = context;
        }

        public List<Project> GetAllProjects()
        {
            return context.Projects.ToList();
        }

        public Project GetProject(int id)
        {
            return context.Projects.Find(id);
        }

        public void AddProject(Project project)
        {
            context.Projects.Add(project);
        }

        public void UpdateProject(Project project)
        {
            context.Entry(project).State = EntityState.Modified;
        }

        public void DeleteProject(int id)
        {
            context.Projects.Remove(context.Projects.Find(id));
        }

        public bool Save()
        {
            return context.SaveChanges() >= 0;
        }
    }
}
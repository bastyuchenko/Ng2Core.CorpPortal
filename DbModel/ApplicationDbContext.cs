using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace Ng2Core.CorpPortal.Models
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    var hrContextConnection = @"Server=tcp:abastiuchenko.database.windows.net,1433;Initial Catalog=Ng2CoreCorpPortal;Persist Security Info=False;User ID=abastiuchenko;Password=Qwer!234;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";
        //    optionsBuilder.UseSqlServer(hrContextConnection);
        //}

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<RoleAssignment>()
                .HasOne<Project>(x => x.Project)
                .WithMany(x => x.RoleAssignments)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<RoleAssignment>()
                .HasOne<Employee>(x => x.GroupLead)
                .WithMany(x => x.RoleAssignmentsGroupLead)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<RoleAssignment>()
                .HasOne<Employee>(x => x.DirectMgr)
                .WithMany(x => x.RoleAssignmentsDirectMgr)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<RoleAssignment>()
                .HasOne<Employee>(x => x.Employee)
                .WithMany(x => x.RoleAssignmentsEmployee)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<ApplicationUser>()
                .HasOne<Employee>(x => x.Employee)
                .WithOne(x => x.User)
                .OnDelete(DeleteBehavior.Restrict);
        }

        public DbSet<ApplicationUser> People { get; set; }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Candidate> Candidates { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<RoleAssignment> RoleAssignments { get; set; }
        public DbSet<Vacancy> Vacancies { get; set; }
        public DbSet<Skill> Skills { get; set; }
        public DbSet<SkillVacancy> SkillVacancies { get; set; }
    }
}
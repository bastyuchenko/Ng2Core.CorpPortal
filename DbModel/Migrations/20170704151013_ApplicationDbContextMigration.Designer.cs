using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Ng2Core.CorpPortal.Models;

namespace Ng2Core.CorpPortal.dbmodel.migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20170704151013_ApplicationDbContextMigration")]
    partial class ApplicationDbContextMigration
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.1")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityRole", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken();

                    b.Property<string>("Name")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasName("RoleNameIndex");

                    b.ToTable("AspNetRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityRoleClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<string>("RoleId")
                        .IsRequired();

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<string>("UserId")
                        .IsRequired();

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserLogin<string>", b =>
                {
                    b.Property<string>("LoginProvider");

                    b.Property<string>("ProviderKey");

                    b.Property<string>("ProviderDisplayName");

                    b.Property<string>("UserId")
                        .IsRequired();

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserRole<string>", b =>
                {
                    b.Property<string>("UserId");

                    b.Property<string>("RoleId");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserToken<string>", b =>
                {
                    b.Property<string>("UserId");

                    b.Property<string>("LoginProvider");

                    b.Property<string>("Name");

                    b.Property<string>("Value");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens");
                });

            modelBuilder.Entity("Ng2Core.CorpPortal.Models.ApplicationUser", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AccessFailedCount");

                    b.Property<DateTime>("BirthDay");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken();

                    b.Property<string>("Email")
                        .HasMaxLength(256);

                    b.Property<bool>("EmailConfirmed");

                    b.Property<bool>("LockoutEnabled");

                    b.Property<DateTimeOffset?>("LockoutEnd");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256);

                    b.Property<string>("PasswordHash");

                    b.Property<string>("PhoneNumber");

                    b.Property<bool>("PhoneNumberConfirmed");

                    b.Property<string>("SecurityStamp");

                    b.Property<byte[]>("TimeStamp")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate();

                    b.Property<bool>("TwoFactorEnabled");

                    b.Property<string>("UserName")
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasName("UserNameIndex");

                    b.ToTable("AspNetUsers");
                });

            modelBuilder.Entity("Ng2Core.CorpPortal.Models.Candidate", b =>
                {
                    b.Property<int>("CandidatId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("FirstName");

                    b.Property<string>("LastName");

                    b.Property<int>("VacancyKey");

                    b.HasKey("CandidatId");

                    b.HasIndex("VacancyKey");

                    b.ToTable("Candidates");
                });

            modelBuilder.Entity("Ng2Core.CorpPortal.Models.Employee", b =>
                {
                    b.Property<int>("EmployeeId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("UserId");

                    b.HasKey("EmployeeId");

                    b.HasIndex("UserId")
                        .IsUnique();

                    b.ToTable("Employees");
                });

            modelBuilder.Entity("Ng2Core.CorpPortal.Models.Project", b =>
                {
                    b.Property<int>("ProjectId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Content")
                        .HasMaxLength(200);

                    b.Property<string>("Title")
                        .HasMaxLength(100);

                    b.HasKey("ProjectId");

                    b.ToTable("Projects");
                });

            modelBuilder.Entity("Ng2Core.CorpPortal.Models.RoleAssignment", b =>
                {
                    b.Property<int>("RoleAssignmentId")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Capacity");

                    b.Property<int>("DirectMgrId");

                    b.Property<int>("Duration");

                    b.Property<int>("EmployeeId");

                    b.Property<int>("GroupLeadId");

                    b.Property<string>("Position")
                        .HasMaxLength(30);

                    b.Property<int>("ProjectId");

                    b.HasKey("RoleAssignmentId");

                    b.HasIndex("DirectMgrId");

                    b.HasIndex("EmployeeId");

                    b.HasIndex("GroupLeadId");

                    b.HasIndex("ProjectId");

                    b.ToTable("RoleAssignments");
                });

            modelBuilder.Entity("Ng2Core.CorpPortal.Models.Skill", b =>
                {
                    b.Property<int>("SkillId")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Title");

                    b.HasKey("SkillId");

                    b.ToTable("Skills");
                });

            modelBuilder.Entity("Ng2Core.CorpPortal.Models.SkillVacancy", b =>
                {
                    b.Property<int>("SkillVacancyId")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("SkillKey");

                    b.Property<int>("VacancyId");

                    b.HasKey("SkillVacancyId");

                    b.HasIndex("SkillKey");

                    b.HasIndex("VacancyId");

                    b.ToTable("SkillVacancies");
                });

            modelBuilder.Entity("Ng2Core.CorpPortal.Models.Vacancy", b =>
                {
                    b.Property<int>("VacancyId")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("DueDate");

                    b.Property<int>("ProjectKey");

                    b.Property<string>("VacancyTitle");

                    b.HasKey("VacancyId");

                    b.HasIndex("ProjectKey");

                    b.ToTable("Vacancies");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityRoleClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityRole")
                        .WithMany("Claims")
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserClaim<string>", b =>
                {
                    b.HasOne("Ng2Core.CorpPortal.Models.ApplicationUser")
                        .WithMany("Claims")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserLogin<string>", b =>
                {
                    b.HasOne("Ng2Core.CorpPortal.Models.ApplicationUser")
                        .WithMany("Logins")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserRole<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityRole")
                        .WithMany("Users")
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Ng2Core.CorpPortal.Models.ApplicationUser")
                        .WithMany("Roles")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Ng2Core.CorpPortal.Models.Candidate", b =>
                {
                    b.HasOne("Ng2Core.CorpPortal.Models.Vacancy", "Vacancy")
                        .WithMany("Candidates")
                        .HasForeignKey("VacancyKey")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Ng2Core.CorpPortal.Models.Employee", b =>
                {
                    b.HasOne("Ng2Core.CorpPortal.Models.ApplicationUser", "User")
                        .WithOne("Employee")
                        .HasForeignKey("Ng2Core.CorpPortal.Models.Employee", "UserId");
                });

            modelBuilder.Entity("Ng2Core.CorpPortal.Models.RoleAssignment", b =>
                {
                    b.HasOne("Ng2Core.CorpPortal.Models.Employee", "DirectMgr")
                        .WithMany("RoleAssignmentsDirectMgr")
                        .HasForeignKey("DirectMgrId");

                    b.HasOne("Ng2Core.CorpPortal.Models.Employee", "Employee")
                        .WithMany("RoleAssignmentsEmployee")
                        .HasForeignKey("EmployeeId");

                    b.HasOne("Ng2Core.CorpPortal.Models.Employee", "GroupLead")
                        .WithMany("RoleAssignmentsGroupLead")
                        .HasForeignKey("GroupLeadId");

                    b.HasOne("Ng2Core.CorpPortal.Models.Project", "Project")
                        .WithMany("RoleAssignments")
                        .HasForeignKey("ProjectId");
                });

            modelBuilder.Entity("Ng2Core.CorpPortal.Models.SkillVacancy", b =>
                {
                    b.HasOne("Ng2Core.CorpPortal.Models.Skill", "Skill")
                        .WithMany("SkillVacancies")
                        .HasForeignKey("SkillKey")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Ng2Core.CorpPortal.Models.Vacancy", "Vacancy")
                        .WithMany("SkillVacancy")
                        .HasForeignKey("VacancyId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Ng2Core.CorpPortal.Models.Vacancy", b =>
                {
                    b.HasOne("Ng2Core.CorpPortal.Models.Project", "Project")
                        .WithMany("Vacancies")
                        .HasForeignKey("ProjectKey")
                        .OnDelete(DeleteBehavior.Cascade);
                });
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
//using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Configuration.AzureKeyVault;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Ng2Core.CorpPortal.Models;
using Ng2Core.CorpPortal.IRepository;
using Ng2Core.CorpPortal.Repository;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using System.Security.Claims;
using System.Security.Principal;
using Newtonsoft.Json.Serialization;
using Microsoft.AspNetCore.Identity;

namespace WebApplication
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true);

            builder.AddEnvironmentVariables();
            Configuration = builder.Build();
            Configuration = builder.AddAzureKeyVault(
              $"https://{Configuration["Vault"]}.vault.azure.net/",
              Configuration["ClientId"],
              Configuration["ClientSecret"]).Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(Configuration["NetCoreCorpPortalSQLConnection"]));

            services.AddIdentity<ApplicationUser, IdentityRole>()
                .AddEntityFrameworkStores<ApplicationDbContext>()
                .AddDefaultTokenProviders();

            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped<ICandidateRepository, CandidateRepository>();
            services.AddScoped<IVacancyRepository, VacancyRepository>();
            services.AddScoped<IProjectRepository, ProjectRepository>();
            services.AddScoped<ISkillRepository, SkillRepository>();
            services.AddMvc()
                .AddJsonOptions(options =>
                options.SerializerSettings.ContractResolver
                = new DefaultContractResolver());
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug((category, logLevel) => (category.Contains("Controller") && logLevel >= LogLevel.Critical));

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseDefaultFiles();
            app.UseStaticFiles();

            app.UseAuthentication();

            app.UseMvc();

            Mapper.Initialize(cfg =>
            {
                cfg.CreateMap<ApplicationUser, UserDto>();
                cfg.CreateMap<UserDto, ApplicationUser>();

                cfg.CreateMap<Project, ProjectDto>();
                cfg.CreateMap<ProjectDto, Project>();

                cfg.CreateMap<CandidateDto, Candidate>();
                cfg.CreateMap<Candidate, CandidateDto>();

                cfg.CreateMap<SkillDto, Skill>();
                cfg.CreateMap<Skill, SkillDto>();

                cfg.CreateMap<VacancyDto, Vacancy>();
                cfg.CreateMap<Vacancy, VacancyDto>();

                cfg.CreateMap<RegisterModel, ApplicationUser>()
                .ForMember(dest => dest.UserName,
                source => source.MapFrom(x => x.Email));

                cfg.CreateMap<IIdentity, ApplicationUser>()
                .ForMember(dest => dest.IsAuthenticated,
                source => source.MapFrom(x => x.IsAuthenticated))
                .ForMember(dest => dest.UserName,
                source => source.MapFrom(x => x.Name));
            });
        }
    }
}

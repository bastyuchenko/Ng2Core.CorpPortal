using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Ng2Core.CorpPortal.Models;
using Ng2Core.CorpPortal.IRepository;
using Ng2Core.CorpPortal.Model;
using Ng2Core.CorpPortal.Repository;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Ng2Core.CorpPortal.Controllers
{
    [Route("api/projects")]
    public class ProjectController : Controller
    {
        IProjectRepository projectRepository;
        public ProjectController(IProjectRepository _projectRepository)
        {
            projectRepository = _projectRepository;
        }

        // GET: api/values
        [HttpGet]
        public IActionResult GetAllProjects()
        {
            var projectsDb = projectRepository.GetAllProjects();
            var projects = Mapper.Map<IEnumerable<ProjectDto>>(projectsDb);
            return Ok(projects);
        }

        [HttpGet("project/{id}", Name = "GetProject")]
        public IActionResult GetProject(int id)
        {
            var projectDb = projectRepository.GetProject(id);
            return Ok(Mapper.Map<ProjectDto>(projectDb));
        }

        // POST api/values
        [HttpPost("project")]
        public IActionResult InserProject([FromBody]ProjectDto ProjectDto)
        {
            if (ProjectDto == null)
            {
                return BadRequest("Object is null or request body is corrupted.");
            }

            var project = Mapper.Map<Project>(ProjectDto);

            projectRepository.AddProject(project);
            if (projectRepository.Save())
            {
                return CreatedAtRoute("GetProject", new { id = project.ProjectId }, null);
            }
            else
            {
                throw new Exception("Unfortunatelly the project wasn't saved. Try again later.");
            }
        }

        // PUT api/values/5
        [HttpPut("project")]
        public IActionResult UpdateProject([FromBody]Project project)
        {
            projectRepository.UpdateProject(project);
            if (projectRepository.Save())
            {
                return NoContent();
            }
            else
            {
                return BadRequest("Unfortunatelly the project wasn't saved. Try again later.");
            }
        }

        // DELETE api/values/5
        [HttpDelete("projects/project/{id}")]
        public IActionResult DeleteProject(int id)
        {
            projectRepository.DeleteProject(id);
            if (projectRepository.Save())
            {
                return Accepted();
            }
            else
            {
                return BadRequest("Unfortunatelly the project wasn't deleted. Try again later.");
            }
        }
    }
}

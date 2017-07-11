using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Ng2Core.CorpPortal.Models;
using Ng2Core.CorpPortal.IRepository;
using Ng2Core.CorpPortal.Repository;

// For more information on enabling Web API for empty skills, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Ng2Core.CorpPortal.Controllers
{
    [Route("api/skills")]
    public class SkillController : Controller
    {
        ISkillRepository skillRepository;
        public SkillController(ISkillRepository _skillRepository)
        {
            skillRepository = _skillRepository;
        }

        // GET: api/values
        [HttpGet]
        public IActionResult GetAllSkills()
        {
            var skillsDb = skillRepository.GetAllSkills();
            var skills = Mapper.Map<IEnumerable<SkillDto>>(skillsDb);
            return Ok(skills);
        }

        [HttpGet("skill/{id}", Name = "GetSkill")]
        public IActionResult GetSkill(int id)
        {
            var skillDb = skillRepository.GetSkill(id);
            return Ok(Mapper.Map<SkillDto>(skillDb));
        }

        // POST api/values
        [HttpPost("skill")]
        public IActionResult InserSkill([FromBody]SkillDto SkillDto)
        {
            if (SkillDto == null)
            {
                return BadRequest("Object is null or request body is corrupted.");
            }

            var skill = Mapper.Map<Skill>(SkillDto);

            skillRepository.AddSkill(skill);
            if (skillRepository.Save())
            {
                return CreatedAtRoute("GetSkill", new { id = skill.SkillId }, null);
            }
            else
            {
                throw new Exception("Unfortunatelly the skill wasn't saved. Try again later.");
            }
        }

        // PUT api/values/5
        [HttpPut("skill")]
        public IActionResult UpdateSkill([FromBody]SkillDto SkillDto)
        {
            if (SkillDto == null)
            {
                return BadRequest("Object is null or request body is corrupted.");
            }

            var skill = Mapper.Map<Skill>(SkillDto);

            skillRepository.UpdateSkill(skill);
            if (skillRepository.Save())
            {
                return CreatedAtRoute("GetSkill", new { id = skill.SkillId }, null);
            }
            else
            {
                throw new Exception("Unfortunatelly the skill wasn't saved. Try again later.");
            }
        }

        // DELETE api/values/5
        [HttpDelete("skill/{id}")]
        public IActionResult DeleteSkill(int id)
        {
            skillRepository.DeleteSkill(id);
            if (skillRepository.Save())
            {
                return Accepted();
            }
            else
            {
                return BadRequest("Unfortunatelly the skill wasn't deleted. Try again later.");
            }
        }
    }
}

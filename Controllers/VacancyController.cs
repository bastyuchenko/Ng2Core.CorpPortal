using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Ng2Core.CorpPortal.Models;
using Ng2Core.CorpPortal.IRepository;
using Ng2Core.CorpPortal.Repository;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Ng2Core.CorpPortal.Controllers
{
    [Route("api/vacancies")]
    public class VacancyController : Controller
    {
        IVacancyRepository vacancyRepository;
        public VacancyController(IVacancyRepository _vacancyRepository)
        {
            vacancyRepository = _vacancyRepository;
        }

        [HttpGet]
        public IActionResult GetAllVacancies()
        {
            var vacanciesDb = vacancyRepository.GetAllVacancies();
            var vacancies = Mapper.Map<IEnumerable<VacancyDto>>(vacanciesDb);
            return Ok(vacancies);
        }

        // GET api/values/5
        [HttpGet("vacancy/{id}", Name = "GetVacancy")]
        public IActionResult GetVacancy(int id)
        {
            var vacancyDb = vacancyRepository.GetVacancy(id);
            return Ok(Mapper.Map<VacancyDto>(vacancyDb));
        }

        [HttpPost("vacancy")]
        public IActionResult InserVacancy([FromBody]VacancyDto cDto)
        {
            if (cDto == null)
            {
                return BadRequest("Object is null or request body is corrupted.");
            }

            var vac = Mapper.Map<Vacancy>(cDto);

            vacancyRepository.AddVacancy(vac);
            if (vacancyRepository.Save())
            {
                return CreatedAtRoute("GetVacancy", new { id = vac.VacancyId }, null);
            }
            else
            {
                throw new Exception("Unfortunatelly the vacancy wasn't saved. Try again later.");
            }
        }

        
        // PUT api/values/5
        [HttpPut("vacancy")]
        public IActionResult UpdateVacancy([FromBody]VacancyDto cDto)
        {
            if (cDto == null)
            {
                return BadRequest("Object is null or request body is corrupted.");
            }

            var vac = Mapper.Map<Vacancy>(cDto);

            vacancyRepository.UpdateVacancy(vac);
            if (vacancyRepository.Save())
            {
                return CreatedAtRoute("GetVacancy", new { id = vac.VacancyId }, null);
            }
            else
            {
                throw new Exception("Unfortunatelly the vacancy wasn't saved. Try again later.");
            }
        }

        // DELETE api/values/5
        [HttpDelete("vacancy/{id}")]
        public IActionResult DeleteVacancy(int id)
        {
            vacancyRepository.DeleteVacancy(id);
            if (vacancyRepository.Save())
            {
                return Accepted();
            }
            else
            {
                return BadRequest("Unfortunatelly the vacancy wasn't deleted. Try again later.");
            }
        }
    }
}

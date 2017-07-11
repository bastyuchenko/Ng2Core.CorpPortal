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
    [Route("api/candidates")]
    public class CandidateController : Controller
    {
        ICandidateRepository candidateRepository;
        public CandidateController(ICandidateRepository _candidateRepository)
        {
            candidateRepository = _candidateRepository;
        }

        [HttpGet]
        public IActionResult GetAllCandidates()
        {
            var candidatesDb = candidateRepository.GetAllCandidates();
            var candidates = Mapper.Map<IEnumerable<CandidateDto>>(candidatesDb);
            return Ok(candidates);
        }

        // GET api/values/5
        [HttpGet("candidate/{id}", Name = "GetCandidate")]
        public IActionResult GetCandidate(int id)
        {
            var candidateDb = candidateRepository.GetCandidate(id);
            return Ok(Mapper.Map<CandidateDto>(candidateDb));
        }

        [HttpPost("candidate")]
        public IActionResult InserCandidate([FromBody]CandidateDto cDto)
        {
            if (cDto == null)
            {
                return BadRequest("Object is null or request body is corrupted.");
            }

            var cand = Mapper.Map<Candidate>(cDto);

            candidateRepository.AddCandidate(cand);
            if (candidateRepository.Save())
            {
                return CreatedAtRoute("GetCandidate", new { id = cand.CandidatId }, null);
            }
            else
            {
                throw new Exception("Unfortunatelly the candidate wasn't saved. Try again later.");
            }
        }

        
        // PUT api/values/5
        [HttpPut("candidate")]
        public IActionResult UpdateCandidate([FromBody]CandidateDto cDto)
        {
            if (cDto == null)
            {
                return BadRequest("Object is null or request body is corrupted.");
            }

            var cand = Mapper.Map<Candidate>(cDto);

            candidateRepository.UpdateCandidate(cand);
            if (candidateRepository.Save())
            {
                return CreatedAtRoute("GetCandidate", new { id = cand.CandidatId }, null);
            }
            else
            {
                throw new Exception("Unfortunatelly the candidate wasn't saved. Try again later.");
            }
        }

        // DELETE api/values/5
        [HttpDelete("candidate/{id}")]
        public IActionResult DeleteCandidate(int id)
        {
            candidateRepository.DeleteCandidate(id);
            if (candidateRepository.Save())
            {
                return Accepted();
            }
            else
            {
                return BadRequest("Unfortunatelly the candidate wasn't deleted. Try again later.");
            }
        }
    }
}

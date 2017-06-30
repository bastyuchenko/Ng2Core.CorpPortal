﻿using System;
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
    [Route("api/hrdepartment")]
    public class UsersController : Controller
    {
        IUserRepository userRepository;
        public UsersController(IUserRepository _userRepository)
        {
            userRepository = _userRepository;
        }

        // GET: api/values
        [HttpGet("users")]
        public IActionResult GetAllUsers()
        {
            var usersDb = userRepository.GetAllUsers();
            var users = Mapper.Map<IEnumerable<UserDto>>(usersDb);
            return Ok(users);
        }

        // GET api/values/5
        [HttpGet("users/user/{id}", Name = "GetUser")]
        public IActionResult GetUser(int id)
        {
            var userDb = userRepository.GetUser(id);
            return Ok(Mapper.Map<UserDto>(userDb));
        }

        // POST api/values
        [HttpPost("users/user")]
        public IActionResult InserUser([FromBody]UserDto userDto)
        {
            if (userDto == null)
            {
                return BadRequest("Object is null or request body is corrupted.");
            }

            var user = Mapper.Map<ApplicationUser>(userDto);

            userRepository.AddUser(user);
            if (userRepository.Save())
            {
                return CreatedAtRoute("GetUser", new { id = user.Id }, null);
            }
            else
            {
                throw new Exception("Unfortunatelly the user wasn't saved. Try again later.");
            }
        }

        // PUT api/values/5
        [HttpPut("users/user")]
        public IActionResult UpdateUser([FromBody]ApplicationUser user)
        {
            userRepository.UpdateUser(user);
            if (userRepository.Save())
            {
                return NoContent();
            }
            else
            {
                return BadRequest("Unfortunatelly the user wasn't saved. Try again later.");
            }
        }

        // DELETE api/values/5
        [HttpDelete("users/user/{id}")]
        public IActionResult DeleteUser(int id)
        {
            userRepository.DeleteUser(id);
            if (userRepository.Save())
            {
                return Accepted();
            }
            else
            {
                return BadRequest("Unfortunatelly the user wasn't deleted. Try again later.");
            }
        }
    }
}

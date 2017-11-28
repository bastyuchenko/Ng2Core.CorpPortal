using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Ng2Core.CorpPortal.Models;

namespace Ng2Core.CorpPortal.Controllers
{
    [Authorize]
    [Route("api/Account")]
    public class AccountController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly ILogger _logger;
        private readonly string _externalCookieScheme;

    public AccountController(
        UserManager<ApplicationUser> userManager,
        SignInManager<ApplicationUser> signInManager,
        ILogger<AccountController> logger)
    {
      _userManager = userManager;
      _signInManager = signInManager;
      _logger = logger;
    }

    //
    // POST: /Account/Login
    [HttpPost("login")]
        [AllowAnonymous]
        // [ValidateAntiForgeryToken]
        public async Task<IActionResult> Login([FromBody]LoginModel model)
        {
            if (ModelState.IsValid)
            {
                var resultAuth = await _signInManager.PasswordSignInAsync(model.Email, model.Password, model.RememberMe, lockoutOnFailure: false);
                if (resultAuth.Succeeded)
                {
                    return Ok(resultAuth);
                }
                else
                {
                    return BadRequest(resultAuth);
                }   
            }
            else
            {
                return BadRequest(ModelState);
            }
        }

        [AllowAnonymous]
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody]RegisterModel model)
        {
            using (_logger.BeginScope("Register user."))
            {
                if (ModelState.IsValid)
                {
                    ApplicationUser user = Mapper.Map<ApplicationUser>(model);
                    var result = await _userManager.CreateAsync(user, model.Password);
                    if (result.Succeeded)
                    {
                        await _signInManager.SignInAsync(user, isPersistent: false);

                        _logger.LogInformation(3, "User created a new account with password.");
                        return StatusCode(201);
                    }
                    _logger.LogError("Something went wrong.");
                    return BadRequest("Something went wrong.");
                }
                else
                {
                    _logger.LogWarning("Model is not valid.", ModelState);
                    return BadRequest(ModelState);
                }
            }
        }

        //
        // POST: /Account/Logout
        [HttpGet("UserInfo")]
        [AllowAnonymous]
        public IActionResult UserInfo()
        {
            ApplicationUser user = Mapper.Map<ApplicationUser>(User.Identity);
            return Ok(user);
        }


        [HttpPost("LogOut")]
        public async Task<IActionResult> Logout()
        {
            try
            {
                await _signInManager.SignOutAsync();
                _logger.LogInformation(4, $"User \"{User.Identity.Name}\" logged out.");
                return Ok($"User \"{User.Identity.Name}\" logged out.");
            }
            catch (System.Exception ex)
            {
                return BadRequest($"Exception: {ex.Message}; Inner exception: {ex.InnerException?.Message}; Exception deeply: {ex.InnerException?.InnerException?.Message}");
            }
        }
    }
}

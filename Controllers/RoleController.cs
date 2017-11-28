using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Ng2Core.CorpPortal.Models;

namespace Ng2Core.CorpPortal.Controllers
{
  [Authorize]
  [Route("api/role")]
  public class RoleController : Controller
  {
    // private readonly UserManager<ApplicationUser> _userManager;
    private readonly RoleManager<IdentityRole> _roleManager;
    private readonly ILogger _logger;
    private readonly string _externalCookieScheme;

    public RoleController(
    RoleManager<IdentityRole> roleManager,
    ILogger<AccountController> logger)
    {
      _roleManager = roleManager;
      _logger = logger;
    }

    [HttpGet("roles")]
    public IActionResult GetRoles()
    {
      return Ok(_roleManager.Roles.ToList());
    }
  }
}

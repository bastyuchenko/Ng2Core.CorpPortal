﻿using System;
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
using Ng2Core.CorpPortal.Models.AccountViewModels;

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
            IOptions<IdentityCookieOptions> identityCookieOptions,
            ILoggerFactory loggerFactory)
        {
            _roleManager = roleManager;
            _externalCookieScheme = identityCookieOptions.Value.ExternalCookieAuthenticationScheme;
            //_emailSender = emailSender;
            //_smsSender = smsSender;
            _logger = loggerFactory.CreateLogger<RoleController>();
        }

        [HttpGet("roles")]
        public IActionResult GetRoles()
        {
            return Ok(_roleManager.Roles.ToList());
        }
    }
}

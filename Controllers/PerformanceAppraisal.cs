using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;

namespace Ng2Core.CorpPortal.Controllers
{
    [Route("api/[controller]/[action]")]
    public class PerformanceAppraisalController: Controller
    {
         private readonly IMongoDatabase _mongoDatabase;
            public PerformanceAppraisalController()
            {
                    var mongoClient = new MongoClient("mongodb://localhost:27017");
                 _mongoDatabase =   mongoClient.GetDatabase("PerformanceAppraisal");
            }

        public IEnumerable<Person> GetPeople()
        {
                return _mongoDatabase.GetCollection<Person>("Person").Find(FilterDefinition<Person>.Empty).ToList();
        }
    }
}
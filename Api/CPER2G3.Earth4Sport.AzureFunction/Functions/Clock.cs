using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System.Text.Json;
using MongoDB.Driver;
using MongoDB.Bson;
using CPER2G3.Earth4Sport.API.Models;
using System.Net;
using AzureFunctions.Extensions.Swashbuckle.Attribute;

namespace CPER2G3.Earth4Sport.AzureFunction.Functions
{
    public class Clock
    {

        private IDAL _dal { get; set; }

        public Clock(IDAL dal) {
            _dal = dal;
        }

        [FunctionName("get_device_data")]
        [ProducesResponseType(typeof(ClockData), (int)HttpStatusCode.OK)]
        [QueryStringParameter("uuid", "", DataType = typeof(string))]
        public async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get")]
            HttpRequest req,
            ILogger log
            )
        {
            log.LogInformation("C# HTTP trigger function processed a request.");

            string uuid = req.Query["uuid"];

            return await _dal.getClockById(uuid);
           
            //// la password � generata con un generatore online fyi, i dati sono provvisori a fini di test
            //string connstr = "mongodb://cper2g3:8z5!H7jAcA!C@localhost:27017";
            //if (connstr == null)
            //{
            //    Console.WriteLine("Connection string not set");
            //    Environment.Exit(0);
            //}

            //var client = new MongoClient(connstr);

            
        }
    }
}

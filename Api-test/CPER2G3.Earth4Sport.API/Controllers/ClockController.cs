using CPER2G3.Earth4Sport.API.Models;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using MongoDB.Bson;

namespace CPER2G3.Earth4Sport.API.Controllers
{
    [ApiController]
    [Route("/clock")]
    public class ClockController : ControllerBase
    {

        private readonly ILogger<ClockController> _logger;

        public ClockController(ILogger<ClockController> logger) { _logger = logger; }

        [HttpGet("{uuid}")]
        public IActionResult GetDevice(string uuid) => GetDeviceData(uuid);
        private IActionResult GetDeviceData(string uuid)
        {
            // la password è generata con un generatore online fyi, i dati sono provvisori a fini di test
            string connstr = "mongodb://cper2g3:8z5!H7jAcA!C@localhost:27017";
            if (connstr == null)
            {
                Console.WriteLine("Connection string not set");
                Environment.Exit(0);
            }

            var client = new MongoClient(connstr);

            var collection = client.GetDatabase("test").GetCollection<BsonDocument>("devices");

            var filter = Builders<BsonDocument>.Filter.Eq("_id", uuid);
            try
            {
                var document = collection.Find(filter).First();
                return Ok(new ClockData()
                {
                    uuid = document["_id"].AsString,
                    n_batch = document["n_batch"].AsInt32,
                    data_batch = DateTime.Parse(document["data_batch"].AsString)
                });
            }
            catch (Exception)
            {
                return NotFound();
            }
        }
    }
}

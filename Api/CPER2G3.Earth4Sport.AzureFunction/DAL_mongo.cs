using CPER2G3.Earth4Sport.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CPER2G3.Earth4Sport.AzureFunction {
    public class DAL_mongo : IDAL {
        private readonly string _connectionString;
        public MongoClient client;

        public DAL_mongo(IConfiguration conf) {
            _connectionString = conf.GetConnectionString("mongo");
            client = new MongoClient(_connectionString);
        }

        public async Task<ObjectResult> getClockById(string uuid) {
            var collection = client.GetDatabase("provisioning").GetCollection<BsonDocument>("devices");

            var filter = Builders<BsonDocument>.Filter.Eq("_id", uuid);
            try {
                var document = collection.Find(filter).First();
                return new OkObjectResult(new ClockData() {
                    uuid = document["_id"].AsString,
                    n_batch = document["n_batch"].AsInt32,
                    data_batch = DateTime.Parse(document["data_batch"].AsString)
                });
            }
            catch (Exception) {
                return new NotFoundObjectResult("The id does not exist.");
            }
        }
    }
}

﻿using CPER2G3.Earth4Sport.API.Models;
using CPER2G3.Earth4Sport.AzureFunction.Models;
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
        private MongoClient client;
        private IMongoDatabase dbProvisioning;
        private IMongoDatabase dbSessions;

        public DAL_mongo(IConfiguration conf) {
            _connectionString = conf.GetConnectionString("mongo");
            client = new MongoClient(_connectionString);
            dbProvisioning = client.GetDatabase("provisioning");
            dbSessions = client.GetDatabase("sessions");
        }

        public async Task<ObjectResult> getClockById(string uuid) {
            var collection = dbProvisioning.GetCollection<BsonDocument>("devices");

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

        public async Task<ObjectResult> postClock(ClockActivityData activity) {
            var collection = dbSessions.GetCollection<ClockActivityData>(activity.SessionUUID);
            if (collection == null) {
                dbProvisioning.CreateCollection(activity.SessionUUID);
                collection = dbSessions.GetCollection<ClockActivityData>(activity.SessionUUID);
            }
            try {
                await collection.InsertOneAsync(activity);
                return new OkObjectResult("Inserimento avvenuto".ToJson());
            }
            catch (Exception) {
                return new BadRequestObjectResult("Error");
            }
        }
    }
}
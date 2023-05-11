using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CPER2G3.Earth4Sport.AzureFunction
{
    public class DAL_mongo: IDAL
    {
        private readonly string _connectionString;
        public MongoClient client;

        public DAL_mongo(IConfiguration conf)
        {
            _connectionString = conf.GetConnectionString("mongo");
            client = new MongoClient(_connectionString);
        }
    }
}

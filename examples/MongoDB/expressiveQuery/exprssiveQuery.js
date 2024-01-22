var mongoClient = null;
var listingsCollection


async function get_Query(req, res) {
  
    var query = {}
    var projection  = {}

    

    var cursor = listingsCollection.find(query, projection).limit(10)

    var claims = await cursor.toArray();
    res.status(200)
    res.send(claims)
}

async function initWebService() {
    var userName = system.getenv("MONGO_USERNAME")
    var passWord = system.getenv("MONGO_PASSWORD")
    mongoClient = new MongoClient("mongodb+srv://" + userName  + ":" + passWord + "@learn.mongodb.net");
    listingsCollection = mongoClient
            .getDatabase("sample_airbnb")
            .getCollection("listingsAndReviews")
  }
    
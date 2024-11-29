# MongoDB
Again, if you want to get the password ask Jun Jie or Johnny.

## Concepts of datastore
Datastore is divided into three parts:
* `MongoDB Instance`: The instance create that is hosted in mongodb
* `Database`: A giant database under the instance that can store categories
* `Collection`: The actual data where you store things under the database

It might sound confusing at first. But this is how databases are structured so get used to it

## Upload things to mongodb
You first paste this string
```ts
const uri = `mongodb+srv://xbot:${process.env.MONGO_DB_PASSWORD}@scoutingapp-intothedeep.s6jr6.mongodb.net/?retryWrites=true&w=majority&appName=ScoutingApp-IntoTheDeep`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
const database = client.db("Your Database");
const collection = database.collection("Your Collection")
//Now there are methods you can do here like .insertOne 
// or .findOne, you can basically guess what the code does
```
Hopefully, you have setup your `.env` file or this code doesn't work. MongoDB should only be used with nextjs routers or pure scripts that interact with mongodb.
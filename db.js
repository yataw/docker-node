const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';

const mongoClient = new MongoClient(url, { useNewUrlParser: true });

mongoClient.connect(async (err, client) => {
    if(err){
        return console.log(err);
    }

    console.log('Connected');

    const db = client.db("usersdb");
    const collection = db.collection("users");
/*    let user = {name: "Tom", age: 23};
    collection.insertOne(user, function(err, result){

        if(err){
            return console.log(err);
        }
        console.log(result.ops);
        client.close();
    });*/

    const cursor = await collection.find();
    const values = await cursor.toArray();

    console.log(values)

    client.close();
});
const mongoose = require("mongoose");

mongoose
    .connect(
        "mongodb+srv://" + process.env.DB_USER_PASS + "@cluster0.diem0.mongodb.net/social-api",
        {
        useNewUrlParser: true,
        useUnifiedTopology: true
        }
        )
    .then(() => console.log("connected to mongoose"))
    .catch((err) => console.log("failleed to connect to mongoDB", err));


//     const { MongoClient } = require('mongoose');
// const uri = "mongodb+srv://peter:peter@cluster0.diem0.mongodb.net/social-api?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
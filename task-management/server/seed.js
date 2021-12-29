const data = require("../dummy_data").fake_data;
const MongoClient = require("mongodb").MongoClient;
//import fake_Data from '../dummy_data.js';
//import MongoClient from 'mongodb';


async function seedDB(){
    const uri = 'mongodb+srv://taskManagement:taskManagement123@cluster0.zsxkl.mongodb.net/TaskManagement?retryWrites=true&w=majority';

    const client = new MongoClient(uri, {
        useNewUrlParser: true, useUnifiedTopology: true});
    
    
    try {

        await client.connect(()=> {const collection = client.db("TaskManagement").collection("Tasks");
            collection.drop();

            collection.insertMany(data);
            console.log("Database seeded :)");
            client.close();
        });
        
    
       
    }catch (err){
        console.log(err.stack);
    }
}

seedDB();












// http://mongodb.github.io/node-mongodb-native/3.2/tutorials/main/
const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://127.0.0.1:27017';

// Database Name
const dbName = 'TCS';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect((err) => {
    const db = client.db('TCS');
    console.log("Connected successfully to Mongo DB");

    /* ---------------------------- START Code Here ------------------------ */
    let employees = {
        name : 'Wilson',
        age : 45,
        designation : 'Sr.Project Manager',
        address : 'Hitech City',
        salary : 150000
    };
    db.collection('Employees').insertOne(employees,(err , r) => {
        console.log('One Record is inserted to database');
    });
    client.close();



    /* ---------------------------- END Code Here ------------------------ */
});
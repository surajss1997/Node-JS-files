// https://docs.mongodb.com/ecosystem/drivers/node/
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://surajss1997:suraj1997@cluster0-s16vo.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(url, { useNewUrlParser: true });

// Database Name
const dbName = 'TCS';

client.connect(err => {
    const db = client.db('TCS');
    console.log('Connected to MongoDB Atlas Successfully');

    /* -------------------------------- START HERE ---------------------------- */

    // DELETE RECORD FROM DATABASE
    // Delete Wilson Record
    let employeesArray = [
        {
            name : 'Rajan',
            age : 25,
            designation : 'Software Engineer',
            address : 'Ameerpet',
            salary : 15000
        },
        {
            name : 'Mahesh',
            age : 35,
            designation : 'Team Lead',
            address : 'Jubilee Hills',
            salary : 65000
        }
    ];
    db.collection('employees').insertMany(employeesArray, (err , data) => {
        console.log('Inserted Two Records');

    });




    client.close();




    /* -------------------------------- END HERE ---------------------------- */

});
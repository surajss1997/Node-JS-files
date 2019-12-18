const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const url = 'mongodb+srv://surajss1997:suraj1997@cluster0-s16vo.mongodb.net/test?retryWrites=true&w=majority';
let _db;

const mongoConnect = callback => {
    MongoClient.connect(url).then(
        client => {
            console.log('Connected Successfully to Mongo DB');
            _db = client.db();
            callback();
        }
    ).catch(err => {
        console.log(err);
        throw err;

    });
};

const getDB = () => {
    if(_db){
        return _db;
    }
    throw  'No Database found';
};

module.exports = {
    mongoConnect ,
    getDB
};
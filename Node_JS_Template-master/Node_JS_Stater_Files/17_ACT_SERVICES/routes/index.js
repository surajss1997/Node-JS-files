const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const mongodb = require('../database/dbOperations');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.ejs');
});

/* GET Raise complaints page. */
router.get('/raise', function(req, res, next) {
  res.render('raise-complaints.ejs');
});

/* GET List of complaints page. */
router.get('/list', function(req, res, next) {
  // get the Records from database
  let db = mongodb.getDB();
  db.collection('complaints').find().toArray((err , complaintsList) => {
    res.render('list-of-complaints.ejs' , {complaintsList : complaintsList});
  });


});
router.get('/subscribed', function(req, res, next) {
  let db = mongodb.getDB();
  db.collection('subscribers').find().toArray((err , subscriberList) => {
    res.render('list-of-subscribers.ejs' , {subscriberList : subscriberList});
  });

});

/* POST Raise Complaints Form. */
router.post('/complain', urlencodedParser, function(req, res, next) {
  let complaint = req.body;
  // insert the complaints to database
  let db = mongodb.getDB();
  db.collection('complaints').insertOne(complaint, (err , r) => {
    console.log('complaint is inserted to Database');
    res.render('complaint-success.ejs' , {complaint : complaint});
  });
});

router.post('/subscriber', urlencodedParser, function(req, res, next) {
  let complaint = req.body;
  // insert the complaints to database
  let db = mongodb.getDB();
  db.collection('subscribers').insertOne(subscriber, (err , r) => {
    console.log('subscriber is inserted to Database');
    res.render('subscribe-success.ejs' , {subscriber1 : subscriber1});
  });
});


module.exports = router;

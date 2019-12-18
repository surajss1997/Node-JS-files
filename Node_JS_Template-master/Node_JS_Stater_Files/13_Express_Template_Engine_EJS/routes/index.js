const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

// Contact Information
let contactInfoList = [];

// Body -parser
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.ejs');
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('about.ejs');
});

/* GET profile page. */
router.get('/profile', function(req, res, next) {
  let selectedProfile = {
    id : "",
    first_name : "",
    last_name : "",
    email : "",
    gender : "",
    ip_address : ""
  };
  res.render('profile.ejs' , {selectedProfile : selectedProfile});
});

// Profile page with Request Parameter
router.get('/profile/:id', function(req, res, next) {
  let profileId = Number.parseInt(req.params.id);
  console.log(profileId);
  // Read from profiles.json
  fs.readFile(path.join(__dirname,'..','data','profiles.json'),'utf8',(err , data) => {
    let profiles = JSON.parse(data);
    let selectedProfile = profiles.find((profile) => {
      return profile.id === profileId;
    });
    if(selectedProfile === undefined){
      res.render('profile.ejs' , {selectedProfile : {}});
    }
    else {
      res.render('profile.ejs' , {selectedProfile : selectedProfile});
    }
  });
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('services.ejs' , {contactInfoList : contactInfoList});
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact.ejs');
});

/* POST contact Form . */
router.post('/contact-form', urlencodedParser ,function(req, res, next) {
  let contactInfo = req.body;
  console.log(contactInfo);
  // add data to contacts Array
  contactInfoList.push(contactInfo);
  // template Engine ejs
  res.render('contact-success.ejs', {contactInfo : contactInfo});
});

module.exports = router;

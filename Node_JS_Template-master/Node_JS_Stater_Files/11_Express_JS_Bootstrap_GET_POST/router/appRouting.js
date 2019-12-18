const path = require('path');
const fs = require('fs');
// Body -parser
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

let mapRoutes = (app) => {

    // Home page
    app.get('/',(request, response) => {
        response.sendFile(path.join(__dirname , '..', 'views' , 'index.html'))
    });

    // About Us page
    app.get('/about',(request, response) => {
        response.sendFile(path.join(__dirname , '..', 'views' , 'about.html'))
    });

    // Services page with Request Query Strings
    app.get('/services',(request, response) => {
        let queryString = request.query;
        console.log(queryString);
        response.sendFile(path.join(__dirname , '..', 'views' , 'services.html'))
    });

    // Profile page
    app.get('/profile',(request, response) => {
        response.sendFile(path.join(__dirname , '..', 'views' , 'profile.html'))
    });

    // Profile page with Request Parameter
    app.get('/profile/:id',(request, response) => {
        let profileId = Number.parseInt(request.params.id);
        console.log(profileId);

        // Read from profiles.json
        fs.readFile(path.join(__dirname,'..','data','profiles.json'),'utf8',(err , data) => {
            let profiles = JSON.parse(data);
            let selectedProfile = profiles.find((profile) => {
                return profile.id === profileId;
            });
            if(selectedProfile === undefined){
                console.log('The Profile is Not found');
            }
            else {
                console.log(selectedProfile);
            }
        });

        response.sendFile(path.join(__dirname , '..', 'views' , 'profile.html'))
    });

    // Contact page
    app.get('/contact',(request, response) => {
        response.sendFile(path.join(__dirname , '..', 'views' , 'contact.html'))
    });

    // Contact Form POST Request
    app.post('/contact-form', urlencodedParser ,(request,response) => {
        let contactInfo = request.body;
        console.log(contactInfo);
        response.sendFile(path.join(__dirname , '..', 'views' , 'contact-success.html'));
    });

    // 404 page
    app.use((request, response) => {
        response.sendFile(path.join(__dirname , '..', 'views' , '404.html'))
    });
};

module.exports = {
    mapRoutes
};
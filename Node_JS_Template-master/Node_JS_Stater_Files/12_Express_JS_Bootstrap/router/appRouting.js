const path = require('path');

let mapRoutes = (app) => {

    // Home page
    app.get('/',(request, response) => {
        response.sendFile(path.join(__dirname , '..', 'views' , 'index.html'))
    });

    // About Us page
    app.get('/about',(request, response) => {
        response.sendFile(path.join(__dirname , '..', 'views' , 'about.html'))
    });

    // Services page
    app.get('/services',(request, response) => {
        response.sendFile(path.join(__dirname , '..', 'views' , 'services.html'))
    });

    // Profile page
    app.get('/profile',(request, response) => {
        response.sendFile(path.join(__dirname , '..', 'views' , 'profile.html'))
    });

    // Contact page
    app.get('/contact',(request, response) => {
        response.sendFile(path.join(__dirname , '..', 'views' , 'contact.html'))
    });

    // 404 page
    app.use((request, response) => {
        response.sendFile(path.join(__dirname , '..', 'views' , '404.html'))
    });
};

module.exports = {
    mapRoutes
};
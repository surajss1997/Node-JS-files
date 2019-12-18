const path = require('path');

let mapRoutes = (app) => {

    // Home Page
    app.get('/', (request,response) => {
        response.sendFile(path.join(__dirname,'..' , 'views','index.html'));
    });

    // News Page
    app.get('/news', (request,response) => {
        response.sendFile(path.join(__dirname,'..' , 'views','news.html'));
    });

    // Gallery Page
    app.get('/gallery', (request,response) => {
        response.sendFile(path.join(__dirname,'..' , 'views','gallery.html'));
    });

    // About Page
    app.get('/about', (request,response) => {
        response.sendFile(path.join(__dirname,'..' , 'views','about.html'));
    });

    // contact Page
    app.get('/contact', (request,response) => {
        response.sendFile(path.join(__dirname,'..' , 'views','contact.html'));
    });

    // 404 page
    app.use((request,response) => {
        response.sendFile(path.join(__dirname,'..' , 'views','404.html'));
    });
};

module.exports = {
    mapRoutes
};
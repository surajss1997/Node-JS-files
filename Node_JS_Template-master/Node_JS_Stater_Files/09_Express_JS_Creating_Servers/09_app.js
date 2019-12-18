const express = require('express');
const app = express();
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

// use Static files middleware
app.use('/public', express.static('public'));

// HTML code / Snippet
app.get('/',(request,response) => {
    response.send(`<h2 style="color: limegreen">Welcome to Express JS </h2>`);
});

// for the whole html files
app.get('/home',(request,response) => {
    response.sendFile(path.join(__dirname,'index.html'));
});

// for a JSON Response
app.get('/json',(request,response) => {
    let githubUser = {
        "login": "thenaveensaggam",
        "id": 25869485,
        "node_id": "MDQ6VXNlcjI1ODY5NDg1",
        "avatar_url": "https://avatars2.githubusercontent.com/u/25869485?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/thenaveensaggam",
        "html_url": "https://github.com/thenaveensaggam",
        "followers_url": "https://api.github.com/users/thenaveensaggam/followers",
        "following_url": "https://api.github.com/users/thenaveensaggam/following{/other_user}",
        "gists_url": "https://api.github.com/users/thenaveensaggam/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/thenaveensaggam/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/thenaveensaggam/subscriptions",
        "organizations_url": "https://api.github.com/users/thenaveensaggam/orgs",
        "repos_url": "https://api.github.com/users/thenaveensaggam/repos",
        "events_url": "https://api.github.com/users/thenaveensaggam/events{/privacy}",
        "received_events_url": "https://api.github.com/users/thenaveensaggam/received_events",
        "type": "User",
        "site_admin": false,
        "name": "NAVEEN SAGGAM",
        "company": "UiBrains",
        "blog": "https://t.me/joinchat/H3ErUQ91InUKU50o1EIwCg",
        "location": "Hyderabad",
        "email": null,
        "hireable": null,
        "bio": "Enthusiastic Web Developer , Trainer and Blogger ",
        "public_repos": 13,
        "public_gists": 18,
        "followers": 1575,
        "following": 1,
        "created_at": "2017-02-18T18:44:26Z",
        "updated_at": "2019-08-19T11:49:52Z"
    };
    response.json(githubUser);
});

// download file from server
app.get('/download',(request,response) => {
    response.download(path.join(__dirname, 'express_notes.pdf'));
});

app.listen(port,hostname, () => {
    console.log(`Server is started at : http://${hostname}:${port}`);
});
const express = require('express')
require('dotenv').config();
const server = express();
const github = {
    "login": "Ruchhit",
    "id": 122780331,
    "node_id": "U_kgDOB1F6qw",
    "avatar_url": "https://avatars.githubusercontent.com/u/122780331?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Ruchhit",
    "html_url": "https://github.com/Ruchhit",
    "followers_url": "https://api.github.com/users/Ruchhit/followers",
    "following_url": "https://api.github.com/users/Ruchhit/following{/other_user}",
    "gists_url": "https://api.github.com/users/Ruchhit/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Ruchhit/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Ruchhit/subscriptions",
    "organizations_url": "https://api.github.com/users/Ruchhit/orgs",
    "repos_url": "https://api.github.com/users/Ruchhit/repos",
    "events_url": "https://api.github.com/users/Ruchhit/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Ruchhit/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 15,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2023-01-16T08:43:38Z",
    "updated_at": "2023-12-27T12:01:37Z"
  }
server.get('/',(req,res)=>{
    res.send("hellowww worldd")
})

server.get('/github',(req,res)=>{
    res.json(github)
})

server.listen(process.env.PORT,()=>{
    console.log(`server is listening at port = ${process.env.PORT}`)
})
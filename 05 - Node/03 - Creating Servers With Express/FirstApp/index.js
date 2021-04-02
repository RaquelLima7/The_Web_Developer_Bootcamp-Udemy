// This download does not include the node_modules folder
// REMEMBER TO RUN "npm install" first, to tell NPM to download the needed packages
// type nodemon index.js in the terminal - with this don't need to reaload in the terminal each change

const express = require("express");
const app = express(); // need to execute the function express, in the docs says it


app.get('/', (req, res) => {
    res.send('Welcome to the home page!')
})

app.get('/r/:subreddit', (req, res) => { // /r/ is a generic path
    // will follow anything who has this params
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing Post ID: ${postId} on the ${subreddit} subreddit</h1>`)
})

app.post('/cats', (req, res) => {
    res.send('POST REQUEST TO /cats!!!! THIS IS DIFFERENT THAN A GET REQUEST!')
})

app.get('/cats', (req, res) => {
    res.send('MEOW!!')
})

app.get('/dogs', (req, res) => {
    res.send('WOOF!')
})

// query strings
app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send('NOTHING FOUND IF NOTHING SEARCHED!')
    } else {
        res.send(`<h1>Search results for: ${q}</h1>`)
    }
})

// unknow path
app.get('*', (req, res) => {
    res.send(`I don't know that path!`)
})


// port 8080
app.listen(8080, () => {
    console.log("LISTENING ON PORT 8080")
})

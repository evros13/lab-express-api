const express = require("express");

const app = express();

const data = require('./data.json')

app.get("/api", (req, res) => {
    res.send("API working")
})

app.get("/api/all", (req, res) => {
    res.send(data)
})

app.get("/api/random", (req, res) => {
    let randomIndex = Math.floor(Math.random() * data.length);

    res.send(data[randomIndex])}
)

app.get("/api/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const randomEpisode = data.find(item => item.id === id);
    
    res.send(randomEpisode);
})


app.listen(3000, () => console.log("Checking 123 🐕"))


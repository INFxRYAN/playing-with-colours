const express = require("express");
const app = express();
const port = 5500;


app.get("/", (req, res) => {
    res.send("Index")
})

app.get("/about", (req, res) => {
    res.send("About")
})


app.get("/projects", (req, res) => {
    res.send("Projects");
})


app.get("/contact", (req, res) => {
    res.send("contact");
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
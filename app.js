const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const readline = require('readline')

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/fibonacci", function (req, res) {
    res.sendFile(__dirname + "/Fibonacci.html")
});

app.get("/names", function (req, res) {
    res.sendFile(__dirname + "/Names.html")
});

app.post("/fibonacci", function (req, res) {

    res.write('<h1>Fibonacci Series</h1>');

    const num1 = Number(req.body.num1);
    let n1 = 0, n2 = 1, nextTerm;

    for (let i = 1; i <= num1; i++) {
        res.write(` ${n1}`);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }

    res.send();
});

app.post("/names", function (req, res) {

    const name1 = req.body.name1
    var list = []


    res.send(list)
})

app.listen(8080, function (req, res) {
    console.log("Server is running on port 8080")
})



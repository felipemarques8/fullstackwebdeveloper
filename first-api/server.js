const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const port = 8080;

// parse application/json
app.use(bodyParser.json())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

let homecleans = [
    {
        "_id": "1",
        "company": "My HomeClean" 
    },
    {
        "_id": "2",
        "company": "My HomeClean 2" 
    },
    {
        "_id": "3",
        "company": "My HomeClean 3" 
    },
    {
        "_id": "4",
        "company": "My HomeClean 4" 
    },
];

app.get('/', (req, res) => {
    res.send('<h1>HomePage</h1>');
});
app.get('/about', (req, res) => {
    res.send('<h1>Sobre Nós</h1>');
});
app.get('/companys', (req, res) => {
    res.send(homecleans);
});
app.get('/contact', (req, res) => {
    res.send('<h1>Contact Page</h1>');
});

app.listen(port, () => {
    console.log("Servidor rodando na porta: " + port);
});
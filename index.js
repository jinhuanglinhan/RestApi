var express = require('express');
var app = express();
const configs = require("./config");
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))

var dataRoute = require('./app/routers/Items.route')(app);

app.listen(configs.port, () => {
    console.log(`Server is running at ${configs.url}`);
});
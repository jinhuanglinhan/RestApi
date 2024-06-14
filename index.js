var express = require('express');
var app = express();
const configs = require("./config");
var bodyParser = require('body-parser');
app.use(bodyParser.json());


var dataRoute = require('./app/routers/Items.route')(app);

app.listen(configs.port, () => {
    console.log(`Server is running at ${configs.url}`);
});
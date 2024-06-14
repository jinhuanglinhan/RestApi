const { sql, conn } = require('../../connect');
var Items = require('../models/Item.model')
var model = new Items();
exports.getList = function (req, res) {
    model.getAll(function (err, data) {
        res.send({ result: data, error: err });
    })
}
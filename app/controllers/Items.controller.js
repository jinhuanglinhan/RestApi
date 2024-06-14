var Items = require('../models/Item.model')
var model = new Items();
exports.getItems = function (req, res) {
    model.getAll(function (err, data) {
        res.send({ result: data, error: err });
    })
}

exports.getId = function (req, res) {
    model.getId(req.params.id, function (err, data) {
        res.send({ result: data, error: err });
    })
}

exports.AddItem = function (req, res) {
    model.AddItem(req.body, function (err, data) {
        res.send({ result: data, error: err });
    })
}
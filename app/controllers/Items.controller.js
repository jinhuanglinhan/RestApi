var Items = require('../models/Item.model')
var model = new Items();
exports.getItems = function (req, res) {
    model.getAll(function (data, err) {
        res.send({ result: data, error: err });
    })
}

exports.getId = function (req, res) {
    model.getId(req.params.id, function (data, err) {
        res.send({ result: data, error: err });
    })
}

exports.AddItem = function (req, res) {
    model.AddItem(req.body, function (data, err) {
        res.send({ result: data, error: err });
    })
}

exports.UpdateItem = function (req, res) {
    model.UpdateItem(req.params.id, req.body, function (data, err) {
        res.send({ result: data, error: err });
    })
}
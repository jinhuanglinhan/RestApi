module.exports = function (app) {
    var ItemsController = require('../controllers/Items.controller')
    app.get('/data', ItemsController.getList);
}
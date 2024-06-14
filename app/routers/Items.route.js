module.exports = function (app) {
    var ItemsController = require('../controllers/Items.controller')

    app.get('/data', ItemsController.getItems);

    app.get('/data/:id', ItemsController.getId);

    app.post('/data/create', ItemsController.AddItem);

    app.put('/data/update/:id', ItemsController.UpdateItem);
}
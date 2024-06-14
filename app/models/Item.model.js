const { sql, conn } = require('../../connect');

module.exports = function () {
    this.getAll = async function (result) {
        var pool = await conn;
        var sqlgetItem = "SELECT * FROM Items";
        return await pool.request()
            .query(sqlgetItem, function (err, data) {
                if (data.recordset.length > 0) {
                    result(null, data.recordset);
                } else {
                    result(true, null);
                }
            });
    }
};
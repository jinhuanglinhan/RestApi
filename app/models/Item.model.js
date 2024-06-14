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

    this.getId = async function (id, result) {
        var pool = await conn;
        var sqlgetId = `SELECT * FROM Items WHERE id = ${id}`;
        return await pool.request()
            .query(sqlgetId, function (err, data) {
                if (data.recordset.length > 0) {
                    result(null, data.recordset[0]);
                } else {
                    result(true, null);
                }
            });
    }

    this.AddItem = async function (NewItem, result) {
        console.log(NewItem)
        var pool = await conn;
        var sqlinsert = `INSERT INTO Items( name, level) VALUES ('${NewItem.name}','${NewItem.level}')`;
        return await pool.request()
            .input('name', sql.NVarChar, NewItem.name)
            .input('level', sql.NVarChar, NewItem.level)
            .query(sqlinsert, function () {
                result(NewItem);
            })
    }
};


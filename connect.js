const sql = require('mssql/msnodesqlv8');
const configs = require("./config");


var config = {
    connectionString: `Driver={ODBC Driver 17 for SQL Server};Server=${configs.sql.server};Database=${configs.sql.database};Trusted_Connection=yes;`
};

const conn = new sql.ConnectionPool(config).connect().then(pool => {
    return pool;
});

module.exports = {
    conn: conn,
    sql: sql
}




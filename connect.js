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

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
// });
// app.use(express.json()) // for parsing application/json
// app.use(express.urlencoded({ extended: true }))

// app.get("/data", async (req, res) => {
//     try {
//         const pool = await sql.connect(config);
//         const rs = await pool.query("SELECT * FROM Items")
//         res.json(rs.recordset)
//     } catch (error) {
//         res.status(500).send(error);
//     }
// })

// app.get("/data/:id", async (req, res) => {
//     try {
//         const pool = await sql.connect(config);
//         const { id } = await req.params;
//         const rs = await pool.query(`SELECT * FROM Items WHERE id = ${id}`);
//         res.json(rs.recordset)
//     } catch (error) {
//         console.log("Error111 : " + error)
//         res.status(500).send(error);
//     }
// })

// // app.get('/data/create', (req, res) => {
// //     res.render('users/create')
// // })

// app.post('/data/create', async (req, res) => {
//     const { name, level } = req.body
//     const pool = await sql.connect(config);
//     console.log(name, level)
//     const rs = await pool.query(`INSERT INTO [Items] (name, level) VALUES ( '${name}','${level}')`);

// })


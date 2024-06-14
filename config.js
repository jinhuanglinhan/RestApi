
const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();

const { PORT, HOST, HOST_URL, SQL_DATABASE, SQL_SERVER } = process.env

const sqlEncrypt = process.env.ENCRYPT === 'true'

assert(PORT, 'PORT required')
assert(HOST, 'HOST required')

module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    sql: {
        server: SQL_SERVER,
        database: SQL_DATABASE,
        options: {
            encrypt: sqlEncrypt,
            enableArithAbort: true
        }
    },

}

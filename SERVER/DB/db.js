const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'Postgres',
    host: 'localhost',
    database: 'chart',
    password: 'Euclide$10K20366',
    port:5432
});
module.exports = pool;
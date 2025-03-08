const { Pool } = require('pg');
module.exports = new Pool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSW,
  database: process.env.DATABASE,
  port: 5432, // default port
});

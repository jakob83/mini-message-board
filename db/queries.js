require('dotenv').config();
const pool = require('./pool');

async function insertMsg(msg) {
  console.log(msg);
  pool.query(
    'INSERT INTO messages (username, message, date ) VALUES ($1, $2, $3)',
    [msg.user, msg.text, msg.date]
  );
}
async function getAllMsg() {
  const { rows } = await pool.query('SELECT * FROM messages;');
  return rows;
}

module.exports = { insertMsg, getAllMsg };

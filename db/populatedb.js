const { Client } = require('pg');
require('dotenv').config();

const SQL = `CREATE TABLE IF NOT EXISTS messages(
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR ( 255 ),
    message VARCHAR ( 255 ),
    date VARCHAR ( 255 )
)`;

async function main() {
  const client = new Client({
    connectionString: `postgresql://${process.env.USER}:${process.env.PASSW}@${process.env.HOST}/${process.env.DATABASE}`,
  });

  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log('done.');
}

main();

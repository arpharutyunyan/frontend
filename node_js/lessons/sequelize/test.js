const mysql = require('mysql2');

const connect = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'lesson1'
});

const db = connect.promise();

async function main() {
  const name = "Tigran";
  const [data] = await db.query(`SELECT * FROM users WHERE first_name = "${name}"`);
  console.log(data)
}

main();




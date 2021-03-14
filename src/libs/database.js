// mysql
import mysql from 'mysql2'; // mysql2 me permite trabajar con promesas
import Config from '../../config.js';

const cfg = new Config();

// conexion to mysql
const connection = mysql.createConnection({
  host: cfg.cfgDB.host,
  user: cfg.cfgDB.user,
  password: cfg.cfgDB.password,
  database: cfg.cfgDB.database,
});

connection.connect((err) => {
  if (err) {
    console.log('Error connecting to DB');
    return;
  }
  console.log('Connection established');
});

let db;
export default db = { connection };

// mysql
import mysql from 'mysql2'; // mysql2 me permite trabajar con promesas
import config from '../../config.js';

// conexion to mysql
const connection = mysql.createConnection({
  host: config.development.database.host,
  user: config.development.database.user,
  password: config.development.database.password,
  database: config.development.database.database,
});

let db;
export default db = { connection };

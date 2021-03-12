// mysql
import mysql from 'mysql2'; // mysql2 me permite trabajar con promesas
import config from '../../config.js';

const connection = mysql.createConnection({ // mysql
  host: config.development.database.host,
  user: config.development.database.user,
  password: config.development.database.password,
  database: config.development.database.database,
  // port: 3306
});
let db;
export default db = { connection };

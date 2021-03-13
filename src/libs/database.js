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

let db;
export default db = { connection };

// mysql
import mysql from 'mysql2'; // mysql2 me permite trabajar con promesas

const connection = mysql.createConnection({ // mysql
  host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
  user: 'bsale_test',
  password: 'bsale_test',
  database: 'bsale_test',
  // port: 3306
});
let db;
export default db = { connection };

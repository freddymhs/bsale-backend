import db from '../libs/database.js';

// testing
async function startMysql() {
  await db.connection.connect();
}
async function closeMysql() {
  await db.connection.end();
}

// query mysql read all
async function mysqlAllProducts() {
  return db.connection.promise().query('select * from product');
}

let modelProduct;
export default modelProduct = { mysqlAllProducts, startMysql, closeMysql };

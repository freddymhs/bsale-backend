import db from '../libs/database.js';

// querys
async function mysqlAllProducts() {
  return db.connection.promise().query('select * from product');
}

// testing
async function startMysql() {
  await db.connection.connect();
}
async function closeMysql() {
  await db.connection.end();
}

let modelProduct;
export default modelProduct = { mysqlAllProducts, startMysql, closeMysql };

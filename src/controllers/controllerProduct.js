import database from '../libs/database.js';
import modelProduct from '../models/modelProduct.js';

async function allTheProducts(req, res, next) {
  let resultadoConsulta;
  const qt = await modelProduct.mysqlAllProducts()
    .then(([rows, fieldssql]) => {
      resultadoConsulta = rows;
    });
  res.send({ list: resultadoConsulta });
}

let controllerProduct;
export default controllerProduct = { allTheProducts };

import modelProduct from '../models/modelProduct.js';

/* return to clients the result from model/querys */
async function allTheProducts(req, res, next) {
  const resQuery = await modelProduct.mysqlAllProducts();

  if (resQuery.sqlState && resQuery.sqlMessage && resQuery.errno) {
    res.status(500);
    res.send(resQuery);
  } else {
    res.status(200);
    res.send(resQuery);
  }
}

async function filteredByName(req, res, next) {
  const resQuery = await modelProduct.filteredProductsByName(req.params.formName);

  if (resQuery.sqlState && resQuery.sqlMessage && resQuery.errno) {
    res.status(500);
    res.send(resQuery);
  } else {
    res.status(200);
    res.send(resQuery);
  }
}

let controllerProduct;
export default controllerProduct = { allTheProducts, filteredByName };

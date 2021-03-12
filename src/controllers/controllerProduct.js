import database from '../libs/database.js';
import modelProduct from '../models/modelProduct.js';

// functions
async function allTheProducts(req, res, next) {
  let resultadoConsulta;
  const qt = await modelProduct.mysqlAllProducts()
    .then(([rows, fieldssql]) => {
      resultadoConsulta = rows;
    });
  res.send({ list: resultadoConsulta });
}
async function filterProductByName(req, res, next) {
  // res.send({ list: 'estos elementos son los mas parecidos' });
  let resultadoConsulta;
  const qt = await modelProduct.mysqlAllProducts()
    .then(([rows, fieldssql]) => {
      resultadoConsulta = rows;
    });

  resultadoConsulta = resultadoConsulta.filter((item) => {
    if (item.name.toLowerCase().includes(req.params.formName.toLowerCase())) {
      return item;
    }
  });
  res.send(resultadoConsulta);
}

let controllerProduct;
export default controllerProduct = { allTheProducts, filterProductByName };

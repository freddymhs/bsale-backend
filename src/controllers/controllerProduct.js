import database from '../libs/database.js';
import modelProduct from '../models/modelProduct.js';

// functions
async function allTheProducts(req, res, next) {
  let resultadoConsulta;
  const qt = await modelProduct.mysqlAllProducts()
    .then(([rows]) => {
      resultadoConsulta = rows;
    });
  res.send(resultadoConsulta);
  // res.send({
  //   list: await modelProduct.mysqlAllProducts()
  //     .then(([rows]) => rows),
  // });
}
async function filterProductByName(req, res, next) {
  let resultadoConsulta;
  const qt = await modelProduct.mysqlAllProducts()
    .then(([rows]) => {
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

import db from '../libs/database.js';

/**
 * @swagger
 * components:
 *   schemas:
 *     product:
 *       type: object
 *       required:
 *       properties:
 *         id:
 *           type: int
 *           description: the product id unique
 *         name:
 *           type: string
 *           description: the product name
 *         url_image:
 *           type: string
 *           description: the product image
 *         price:
 *           type: float
 *           description: the product price
 *         discount:
 *           type: int
 *           description: the product discount
 *         category:
 *           type: int
 *           description: the product category
 *       example:
 *         id: 99
 *         name: cafe enlatado
 *         url_image: https://picsum.photos/200/300/
 *         price: 2900
 *         discount: 90
 *         category: "naturales"
 */

async function mysqlAllProducts() {
  try {
    let resultadoConsulta;
    await db.connection.promise().query('SELECT product.id , product.name , product.url_image , product.price , product.discount , category.name as category FROM product INNER JOIN category ON category.id = product.category order by category')
      .then(([rows]) => {
        resultadoConsulta = rows;
      });

    return resultadoConsulta;
  } catch (err) {
    return err;
  }
}

async function filteredProductsByName(paramName) {
  try {
    let resultadoConsulta;
    await db.connection.promise().query('SELECT product.id , product.name , product.url_image , product.price , product.discount , category.name as category FROM product INNER JOIN category ON category.id = product.category order by category')
      .then(([rows]) => {
        resultadoConsulta = rows;
      });

    resultadoConsulta = resultadoConsulta.filter((item) => {
      if (item.name.toLowerCase().includes(paramName.toLowerCase())) {
        return item;
      }
    });
    return resultadoConsulta;
  } catch (err) {
    return err;
  }
}

async function filteredProductsByPrice() {
  const min = 1000;
  const max = 1300;
  try {
    let resultadoConsulta;
    await db.connection.promise().query('SELECT product.id , product.name , product.url_image , product.price , product.discount , category.name as category FROM product INNER JOIN category ON category.id = product.category order by category')
      .then(([rows]) => {
        resultadoConsulta = rows;
      });

    resultadoConsulta = resultadoConsulta.filter((item) => {
      if (item.price > min && item.price < max) {
        return item;
      }
    });

    return resultadoConsulta;
  } catch (err) {
    return err;
  }
}

let modelProduct;
export default modelProduct = { mysqlAllProducts, filteredProductsByName, filteredProductsByPrice };

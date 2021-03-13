import db from '../libs/database.js';

/**
 * @swagger
 * components:
 *   schemas:
 *     category:
 *       type: object
 *       required:
 *       properties:
 *         id:
 *           type: int
 *           description: the category id unique
 *         name:
 *           type: string
 *           description: the category name
 *       example:
 *         id: 66
 *         name: dieta
 */

// querys
async function mysqlAllCategories() {
  return db.connection.promise().query('select * from category');
}

let modelCategory;
export default modelCategory = { mysqlAllCategories };

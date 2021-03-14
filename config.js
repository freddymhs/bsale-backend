/* function that returns an object to development enviroment */
function development() {
  return {
    cfgDB: {
      host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
      user: 'bsale_test',
      password: 'bsale_test',
      database: 'bsale_test',
    },
    cfgServer: {
      url: 'http://localhost:3000',
      host: '127.0.0.1',
      port: '3000',
    },
  };
}

/* function that returns an object to production enviroment */
function production() {
  return {
    cfgDB: {
      host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
      user: 'bsale_test',
      password: 'bsale_test',
      database: 'bsale_test',
    },
    cfgServer: {
      url: `https://${process.env.npm_package_name}.herokuapp.com`,
      host: process.env.HOST,
      port: process.env.PORT,
    },
  };
}

/* main funciton that return and use the correct enviroments parameters */
function config() {
  switch (process.env.NODE_ENV) {
    case 'development':
      return development();

    case 'production':
      return production();

    default:
      return development();
  }
}

export default config;

// mysql -u "bsale_test" -p  -h mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com
//
// SELECT product.id , product.name , product.url_image , product.price , product.discount , category.name as category FROM product INNER JOIN category ON category.id = product.category;

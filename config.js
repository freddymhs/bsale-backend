const config = {
  // entorno = process.env.NODE_ENV ,
  development: {

    // mongodb connection settings
    database: {
      // host: '127.0.0.1',
      // port: '27017',
      // db: 'site_dev',
      host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
      user: 'bsale_test',
      password: 'bsale_test',
      database: 'bsale_test',
    },
    // server details
    server: {
      // herokURL: `https://${process.env.npm_package_name}.herokuapp.com/`,
      host: process.env.HOST || '127.0.0.1',
      port: process.env.PORT || '3000',
    },
  },
};

// https://bsale-backend.herokuapp.com/

export default config;

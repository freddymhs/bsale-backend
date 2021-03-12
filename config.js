const config = {
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
      host: '127.0.0.1',
      port: '3000',
    },
  },
};

export default config;

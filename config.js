function desarrollo() {
  return {
    cfgDB: {
      host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
      user: 'bsale_test',
      password: 'bsale_test',
      database: 'bsale_test',
    },
    cfgServer: {
      url: 'http://localhost',
      host: '127.0.0.1',
      port: '3000',
    },
  };
}

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
      port: process.env.PORT || 3001,
    },
  };
}

function config() {
  switch (process.env.NODE_ENV) {
    case 'development':
      return desarrollo();

    case 'production':
      return production();

    default:
      return desarrollo();
  }
}

export default config;

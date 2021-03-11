const config = {
  development: {
    // mongodb connection settings
    database: {
      host: '127.0.0.1',
      port: '27017',
      db: 'site_dev',
    },
    // server details
    server: {
      host: '127.0.0.1',
      port: '3000',
    },
  },
};

export default config;

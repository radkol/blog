const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'blog'),
      user: env('DATABASE_USERNAME', 'blog'),
      password:  env('DATABASE_PASSWORD', 'blog'),
      ssl: {
        rejectUnauthorized:env.bool('DATABASE_SSL', false), // For self-signed certificates
      },
    },
    debug: false,
  },
});

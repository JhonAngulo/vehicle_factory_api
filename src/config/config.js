'use strict'

require('dotenv').config()

const config = {
  port: process.env.PORT,
  pg_host: process.env.PG_DB_HOST,
  pg_user: process.env.PG_DB_USER,
  pg_password: process.env.PG_DB_PASSWORD,
  pg_port: process.env.PG_DB_PORT,
  pg_database: process.env.PG_DB_DATABASE
}

module.exports = config

'use strict'

const { Pool } = require('pg')

// eslint-disable-next-line camelcase
const { pg_host, pg_user, pg_password, pg_port, pg_database } = require('../config/config')

const pool = new Pool({
  host: pg_host,
  user: pg_user,
  password: pg_password,
  database: pg_database,
  port: pg_port,
  max: 5
  // idleTimeoutMillis: 30000,
  // connectionTimeoutMillis: 2000,
})

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack)
  }
  client.query('SELECT NOW()', (err, result) => {
    release()
    if (err) {
      return console.error('Error executing query', err.stack)
    }
    console.log(`Conected PG DataBase ${result.rows[0].now}`)
  })
})

module.exports = {
  query: (text, params) => pool.query(text, params)
}

'use strict'

// eslint-disable-next-line camelcase
const pg_conexion = require('../lib/pg_conexion')

const tables = require('./createTables')

async function queri (sql) {
  try {
    const response = await pg_conexion.query(sql)
    response.map(res => console.log(res.command))
  } catch (error) {
    console.log(error)
  }
}

function runQueries () {
  tables.map(table => queri(table))
}

runQueries()

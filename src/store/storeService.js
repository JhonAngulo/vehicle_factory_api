'use strict'

// eslint-disable-next-line camelcase
const pg_conexion = require('../lib/pg_conexion')

class storeService {
  async runQuery (sql, params) {
    try {
      const response = await pg_conexion.query(sql, params)
      return response.rows
    } catch (error) {
      console.error(error)
      return undefined
    }
  }
}

module.exports = storeService

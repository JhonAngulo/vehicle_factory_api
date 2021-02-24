'use strict'

const StoreService = require('../../store/storeService')
const storeService = new StoreService()

class OrderService {
  constructor () {
    this.table = 'order'
  }

  async get () {
    const query = `SELECT id, client, "order", date::CHAR(10) FROM "${this.table}";`
    const orders = await storeService.runQuery(query)
    return orders || []
  }

  async insert ({ order }) {
    const { client, order: no, date } = order
    const query = `
    INSERT INTO "${this.table}"(
    client, "order", date)
    VALUES ($1, $2, $3);
    `
    const newOrder = await storeService.runQuery(query, [client, no, date])
    return newOrder || []
  }
}

module.exports = OrderService

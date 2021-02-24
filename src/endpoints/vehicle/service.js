/* eslint-disable camelcase */
'use strict'

const StoreService = require('../../store/storeService')
const storeService = new StoreService()

class Vehicle {
  constructor () {
    this.table = 'vehicle'
  }

  async get () {
    const query = `SELECT * FROM ${this.table};`
    const vehicles = await storeService.runQuery(query)
    return vehicles || []
  }

  async insert ({ vehicle }) {
    const { mark, manufacturing_time } = vehicle
    const query = `
    INSERT INTO ${this.table}(
    mark, manufacturing_time)
    VALUES ($1, $2);
    `
    const newVehicle = await storeService.runQuery(query, [mark, manufacturing_time])
    return newVehicle || []
  }

  async update ({ vehicle, vehicleId }) {
    const { mark, manufacturing_time } = vehicle
    const query = `
    UPDATE ${this.table}
    SET mark=($1), manufacturing_time=($2)
    WHERE id = ($3);
    `
    const newVehicle = await storeService.runQuery(query, [mark, manufacturing_time, vehicleId])
    return newVehicle || []
  }

  async delete ({ vehicleId }) {
    const query = `
    DELETE FROM ${this.table}
    WHERE id = ($1);
    `
    const newVehicle = await storeService.runQuery(query, [vehicleId])

    return newVehicle || []
  }
}

module.exports = Vehicle

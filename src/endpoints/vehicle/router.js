'use strict'

const express = require('express')
const router = express.Router()

const response = require('../../network/response')

const VehicleService = require('./service')
const vehicleService = new VehicleService()

router.get('/', async (req, res) => {
  const vehicles = await vehicleService.get()
  response.success({ req, res, message: 'Vehicles List', data: vehicles })
})

router.post('/', async (req, res) => {
  const vehicle = await vehicleService.insert({ vehicle: req.body })
  if (vehicle) {
    response.success({ req, res, status: 201, message: 'Vehicle created', data: vehicle })
  } else {
    response.error({ req, res, message: 'Error creating vehicle' })
  }
})

router.put('/:id', async (req, res) => {
  const updateVehicles = await vehicleService.update({ vehicle: req.body, vehicleId: req.params.id })
  if (updateVehicles) {
    response.success({ req, res, status: 201, message: 'Vehicle updated', data: updateVehicles })
  } else {
    response.error({ req, res, message: 'Error updating vehicle' })
  }
})

router.delete('/:id', async (req, res) => {
  const deleteVehicles = await vehicleService.delete({ vehicleId: req.params.id })
  if (deleteVehicles) {
    response.success({ req, res, message: 'Vehicle removed', data: deleteVehicles })
  } else {
    response.error({ req, res, message: 'Error updating vehicle' })
  }
})

module.exports = router

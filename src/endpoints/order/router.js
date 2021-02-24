'use strict'

const express = require('express')
const router = express.Router()

const response = require('../../network/response')

const OrderService = require('./service')
const orderService = new OrderService()

router.get('/', async (req, res) => {
  const orders = await orderService.get()
  response.success({ req, res, message: 'Order List', data: orders })
})

router.post('/', async (req, res) => {
  const order = await orderService.insert({ order: req.body })
  if (order) {
    response.success({ req, res, status: 201, message: 'Order created', data: order })
  } else {
    response.error({ req, res, message: 'Error creating order' })
  }
})

module.exports = router

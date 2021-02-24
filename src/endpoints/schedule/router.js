'use strict'

const express = require('express')
const router = express.Router()

const ScheduleService = require('./service')
const scheduleService = new ScheduleService()

const response = require('../../network/response')

router.get('/', async (req, res) => {
  const schedule = await scheduleService.get()
  response.success({ req, res, message: 'Schedule List', data: schedule })
})

module.exports = router

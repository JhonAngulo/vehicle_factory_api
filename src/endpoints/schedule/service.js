'use strict'

const OrderService = require('../order/service')
const orderService = new OrderService()

const VehicleService = require('../vehicle/service')
const vehicleService = new VehicleService()

class ScheduleGenerator {
  constructor () {
    this.data = []
  }

  agentEvent ({ orders, vehicles }) {
    const daysHors = {}
    this.data = JSON.parse(JSON.stringify(schedule))
    orders.reduce((groups, order) => {
      const date = new Date(order.date)
      const day = date.getDay()

      if (!groups[day]) {
        groups[day] = []
        groups[day + 1] = []
      }

      if (!daysHors[day]) {
        daysHors[day] = 0
      }

      order.manufacturing_time =
        vehicles.filter(item => item.mark === order.order).length
          ? vehicles.filter(item => item.mark === order.order)[0].manufacturing_time
          : 1
      daysHors[day] +=
        vehicles.filter(item => item.mark === order.order).length
          ? parseInt(vehicles.filter(item => item.mark === order.order)[0].manufacturing_time)
          : 1

      if (day === 0 || day < 5) {
        if (daysHors[day] > 16) {
          this.data[day + 1].data.push(order)
          groups[day + 1].push(order)
        } else {
          this.data[day].data.push(order)
          groups[day].push(order)
        }
      } else if (day === 6) {
        if (daysHors[day] > 4) {
          this.data[day + 1].data.push(order)
          groups[day + 1].push(order)
        } else {
          this.data[day].data.push(order)
          groups[day].push(order)
        }
      }

      return groups
    }, {})

    return this.data
  }
}

class ScheduleService {
  constructor () {
    this.ScheduleGenerator = new ScheduleGenerator()
  }

  async get () {
    const orders = await orderService.get()
    const vehicles = await vehicleService.get()
    const daily = this.ScheduleGenerator.agentEvent({ orders, vehicles })
    return daily
  }
}

module.exports = ScheduleService

const schedule = [
  {
    id: 0,
    day: 'lunes',
    data: []
  },
  {
    id: 1,
    day: 'martes',
    data: []
  },
  {
    id: 2,
    day: 'miercoles',
    data: []
  },
  {
    id: 3,
    day: 'jueves',
    data: []
  },
  {
    id: 4,
    day: 'viernes',
    data: []
  },
  {
    id: 5,
    day: 'sabado',
    data: []
  },
  {
    id: 6,
    day: 'domingo',
    data: []
  }
]

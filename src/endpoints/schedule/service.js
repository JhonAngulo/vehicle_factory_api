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
    this.data = JSON.parse(JSON.stringify(schedule))
    orders.reduce((groups, order) => {
      const date = new Date(order.date)
      const day = date.getUTCDay()

      const hours = parseInt(vehicles.filter(item => item.mark === order.order)[0].manufacturing_time)

      if (day === 1 || day < 6) {
        const temHours = this.data[day].hours + hours
        // console.log(day, hours, this.data[day].hours, temHours)
        if (temHours > 16) {
          this.data[day + 1].data.push(order)
          this.data[day + 1].hours += hours
        } else {
          this.data[day].data.push(order)
          this.data[day].hours += hours
        }
      } else if (day === 6) {
        const temHours = this.data[day].hours + hours
        if (temHours > 4) {
          this.data[day + 1].data.push(order)
          this.data[day + 1].hours += hours
        } else {
          this.data[day].data.push(order)
          this.data[day].hours += hours
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
    day: 'domingo',
    data: [],
    hours: 'Dia no laboral'
  },
  {
    id: 1,
    day: 'lunes',
    data: [],
    hours: 0
  },
  {
    id: 2,
    day: 'martes',
    data: [],
    hours: 0
  },
  {
    id: 3,
    day: 'miercoles',
    data: [],
    hours: 0
  },
  {
    id: 4,
    day: 'jueves',
    data: [],
    hours: 0
  },
  {
    id: 5,
    day: 'viernes',
    data: [],
    hours: 0
  },
  {
    id: 6,
    day: 'sabado',
    data: [],
    hours: 0
  }
]

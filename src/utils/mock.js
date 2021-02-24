const DB_MOCK = {
  vehicle: [
    {
      id: 1,
      mark: 'renault',
      manufacturing_time: 1
    },
    {
      id: 2,
      mark: 'chevrolet',
      manufacturing_time: 2
    },
    {
      id: 3,
      mark: 'ford',
      manufacturing_time: 3
    },
    {
      id: 4,
      mark: 'toyota',
      manufacturing_time: 4
    }
  ],
  schedule: [
    {
      id: 0,
      day: 'lunes',
      data: [
        {
          mark: 'Toyota',
          count: 2,
          hours: 1
        }
      ]
    },
    {
      id: 1,
      day: 'martes',
      data: [
        {
          mark: 'Toyota',
          count: 2,
          hours: 1
        }
      ]
    },
    {
      id: 2,
      day: 'miercoles',
      data: [
        {
          mark: 'Toyota',
          count: 2,
          hours: 1
        }
      ]
    },
    {
      id: 3,
      day: 'jueves',
      data: [
        {
          mark: 'Toyota',
          count: 2,
          hours: 1
        }
      ]
    },
    {
      id: 4,
      day: 'viernes',
      data: [
        {
          mark: 'Toyota',
          count: 2,
          hours: 1
        }
      ]
    },
    {
      id: 5,
      day: 'sabado',
      data: [
        {
          mark: 'Toyota',
          count: 2,
          hours: 1
        }
      ]
    },
    {
      id: 6,
      day: 'domingo',
      data: [
        {
          mark: 'Toyota',
          count: 2,
          hours: 1
        }
      ]
    }
  ],
  order: [
    {
      id: 1,
      client: 'Isaac Palmet',
      order: 'toyota',
      date: '2021-02-23'
    },
    {
      id: 2,
      client: 'Linda Palmet',
      order: 'ford',
      date: '2021-02-23'
    }
  ]
}

module.exports = DB_MOCK

'use strict'

exports.success = ({ req, res, status = 200, message = '', data = [] }) => {
  res.status(status).json({
    status,
    data: data,
    error: false,
    message
  })
}

exports.error = ({ req, res, status = 500, message = 'Internal server error', data = [] }) => {
  res.status(status).json({
    status,
    data: data,
    error: true,
    message
  })
}

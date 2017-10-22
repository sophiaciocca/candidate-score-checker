const Sequelize = require('sequelize')
const db = require('../db')

const Company = db.define('company', {
  fractal_index: {
    type: Sequelize.FLOAT
  }
})

module.exports = Company

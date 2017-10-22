const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const Candidate = db.define('candidate', {
  communication_score: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  coding_score: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  title: {
    type: Sequelize.ENUM('Engineer', 'Senior Engineer'),
    allowNull: false
  }
})

module.exports = Candidate

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Candidate = require('../db/models/candidate')

describe('Candidate ID route', () => {
  beforeEach(() => {
    return db.sync()
  })

  describe('/api/candidates/:candidateId/', () => {
    const codysCandidateId = 889;

    it('GET /api/candidates/:candidateId', () => {
      return request(app)
        .get(`/api/candidates/${codysCandidateId}`)
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('array')
          expect(res.body[0].toFixed(2)).to.be.equal('0.67')
          expect(res.body[1].toFixed(2)).to.be.equal('0.47')
        })
    })
  })
})

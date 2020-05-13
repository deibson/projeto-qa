require('dotenv').config()
const chai = require('chai')
const assert = require('assert')
const chaiHttp = require('chai-http')
const {Given} = require('cucumber')
const uuid = require('uuid')
chai.use(chaiHttp)
chai.should()

Given('que seja cadastrado um novo usuario', async function () {

    const id = (Math.random() * 200).toFixed(0)
    const body = {
        "ID": id,
        "UserName": `Teste user id ${id}`,
        "Password": uuid.v4()
    }

    const res = await chai
        .request(process.env.APP_BASE_URL)
        .post('/api/Users')
        .set('content-type', 'application/json')
        .send(body)

    if (res.error) {
        console.log(`ERROR: ${res.statusCode} - ${res.error.text}`)
    }

    assert.ok(res, 'should have an answer')
    res.should.have.status(200)
})

Given('que seja listados os usuarios cadastrados', async function () {

    const res = await chai
        .request(process.env.APP_BASE_URL)
        .post('/api/Users')
        .set('content-type', 'application/json')

    if (res.error) {
        console.log(`ERROR: ${res.statusCode} - ${res.error.text}`)
    }

    assert.ok(res, 'should have an answer')
    res.should.have.status(200)
})
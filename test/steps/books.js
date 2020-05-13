require('dotenv').config()
const chai = require('chai')
const assert = require('assert')
const chaiHttp = require('chai-http')
const {Given} = require('cucumber')
const variables = require('../support/variables')
chai.use(chaiHttp)
chai.should()

Given('que seja cadastrado um novo livro', async function () {

    const id = (Math.random() * 200).toFixed(0)
    const body = {
        "ID": id,
        "Title": `Teste ${id}`,
        "Description": variables.Description,
        "PageCount": (Math.random() * 200).toFixed(0),
        "Excerpt": variables.Excerpt,
        "PublishDate": new Date().toISOString()
    }

    const res = await chai
        .request(process.env.APP_BASE_URL)
        .post('/api/Books')
        .set('content-type', 'application/json')
        .send(body)

    variables.book = res.body
    console.log(variables.book)

    if (res.error){
        console.log(`ERROR: ${res.statusCode} - ${res.error.text}`)
    }

    assert.ok(res, 'should have an answer')
    res.should.have.status(200)
})

Given('que seja listados os livros cadastrados', async function () {

    const res = await chai
        .request(process.env.APP_BASE_URL)
        .get('/api/Books')
        .set('content-type', 'application/json')

    variables.listBooks = res.body

    if (res.error){
        console.log(`ERROR: ${res.statusCode} - ${res.error.text}`)
    }

    assert.ok(res, 'should have an answer')
    res.should.have.status(200)
})

Given('que seja listado o livro cadastrado', async function () {

    const res = await chai
        .request(process.env.APP_BASE_URL)
        .get(`/api/Books/${variables.book['ID']}`)
        .set('content-type', 'application/json')


    if (res.error){
        console.log(`ERROR: ${res.statusCode} - ${res.error.text}`)
    }

    console.log(res.body)

    assert.ok(res, 'should have an answer')
    res.should.have.status(200)
})

Given('que seja deletado um livro cadastrado', async function () {

    const res = await chai
        .request(process.env.APP_BASE_URL)
        .delete(`/api/Books/${variables.book['ID']}`)
        .set('content-type', 'application/json')

    if (res.error){
        console.log(`ERROR: ${res.statusCode} - ${res.error.text}`)
    }

    assert.ok(res, 'should have an answer')
    res.should.have.status(200)
})

Given('que seja atualizado os dados de um livro', async function () {

    const id = variables.listBooks[(Math.random() * variables.listBooks.length).toFixed(0)]['ID']
    const body = {
        "ID": id,
        "Title": `Teste ${id}`,
        "Description": variables.Description,
        "PageCount": (Math.random() * 200).toFixed(0),
        "Excerpt": variables.Excerpt,
        "PublishDate": new Date().toISOString()
    }

    const res = await chai
        .request(process.env.APP_BASE_URL)
        .put(`/api/Books/${id}`)
        .set('content-type', 'application/json')
        .send(body)

    variables.book = res.body

    if (res.error){
        console.log(`ERROR: ${res.statusCode} - ${res.error.text}`)
    }

    assert.ok(res, 'should have an answer')
    res.should.have.status(200)
})
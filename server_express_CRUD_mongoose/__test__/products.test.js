const mongoose = require("mongoose")
const { app, server } = require("../app"); // import express

const products = require("../routes/products"); //import file we are testing
const request = require("supertest"); // supertest is a framework that allows to easily test web apis
const api = request(app)


describe("tesing server routs ", () => {
    test("Prueba de Get en products", async () => {
        await api
            .get('/api/products')
            .expect(200)
            .expect('Content-Type', /application\/json/)


    })
    test("Prueba de Get en products", async () => {
        await api
            .get('/api/products/1')
            .expect(200)
            .expect('Content-Type', /application\/json/)


    })
    test("Prueba de Post en products", async () => {
        const newProduct = {
            title: "Agapornis",
            price: 13.5,
            description: "nativo de africa",
            category: "animal",
            id: 666
        }
        await api
            .post('/api/products')
            .send(newProduct)
            .expect(201)
            .expect('Content-Type', /application\/json/)


    })
})

afterAll(() => {
    server.close()
    mongoose.connection.close()
});
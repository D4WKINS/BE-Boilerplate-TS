const supertest = require("supertest")
import app from "../server"

const request = supertest(app) // used to test request's response

test("test the addition of two numbers", () => {
    expect(2 + 5).toBe(7)
})

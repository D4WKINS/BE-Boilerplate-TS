"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest = require("supertest");
const server_1 = __importDefault(require("../server"));
const request = supertest(server_1.default); // used to test request's response
test("test the addition of two numbers", () => {
    expect(2 + 5).toBe(7);
});

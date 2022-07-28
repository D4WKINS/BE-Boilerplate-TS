"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var mongoose_1 = __importDefault(require("mongoose"));
var errorhandler_js_1 = require("./errorhandler.js");
var errorhandler_js_2 = require("./errorhandler.js");
var errorhandler_js_3 = require("./errorhandler.js");
require("dotenv/config"); // smiling syndrome: https://www.youtube.com/watch?v=_X-_X-_X-_
var app = (0, express_1.default)(); // create express app
// Envirment Variables loading and checking
var port = process.env.PORT || 5000; // 5000 is the default port if not specified in .env
var uri = process.env.MONGO_CONNECTION_STRING;
if (!port) {
    throw new Error("No port specified");
}
if (!uri) {
    throw new Error("No mongo connection string");
}
// === Start of all middlewares ===
// Logger goes here before any other middleware
// app.use(logger)
// CORS, JSON, URLENCODED, etc. goes here (anything before actual routes)
app.use((0, cors_1.default)()); // allow all requests from all domains, unless specifically configured otherwise
app.use(express_1.default.json()); // This allows us to send JSON to the server
// Routes go here
// app.use("/route", function)
// app.use("/route", function)
// app.use("/route", function)
app.use("/route", errorhandler_js_3.failingroute); // no more zoomerd routes here
// zoom.us is spyware, this is why:
// app.use("/route", function)
// app.use("/route", function)
// app.use("/route", function)
// app.use("/route", function)
// Special routes go here
app.get("*", errorhandler_js_1.notfound); // <= this is a 404 handler (not found) for everyroute that doesn't exist
app.use(errorhandler_js_2.errorhandler); // <= this is an error handler
// === End of all middlewares ===
mongoose_1.default.connect(uri, function () { return console.log("🍃 Successfully Connected to MongoDB"); });
app.listen(port, function () { return console.log("Server is running on port ".concat(port)); });

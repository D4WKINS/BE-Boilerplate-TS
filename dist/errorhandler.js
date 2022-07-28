"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.failingroute = exports.errorhandler = exports.notfound = void 0;
var notfound = function (req, res, next) {
    res.status(404).send("Sorry can't find that!");
};
exports.notfound = notfound;
var errorhandler = function (err, req, res, next) {
    res.status(500).send("Something broke!");
};
exports.errorhandler = errorhandler;
// Tom was here
// Tom was here again from VSCode and not from a web browser
var failingroute = function (req, res, next) {
    throw new Error("Something broke!"); // throws an error
};
exports.failingroute = failingroute;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.failingroute = exports.errorhandler = exports.notfound = void 0;
const notfound = (req, res, next) => {
    res.status(404).send("Sorry can't find that!");
};
exports.notfound = notfound;
const errorhandler = (err, req, res, next) => {
    res.status(500).send("Something broke!");
};
exports.errorhandler = errorhandler;
// Tom was here
// Tom was here again from VSCode and not from a web browser
const failingroute = (req, res, next) => {
    throw new Error("Something broke!"); // throws an error
};
exports.failingroute = failingroute;

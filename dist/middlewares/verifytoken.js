"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
const constants_1 = require("../../constants");
const secret = String(constants_1.SECRET);
const verifytoken = (req, res, next) => {
    const token = req.header("x-access-token");
    if (token == null) {
        res.status(401).send(`No token specified`);
        res.end();
    }
    else {
        (0, jsonwebtoken_1.verify)(token, secret, (err, payload) => {
            if (err || !payload) {
                res.status(401).send(`The token is not valid`);
                res.end();
            }
            res.locals.payload = payload; //TODO: analizar
            next();
        });
    }
};
exports.default = verifytoken;

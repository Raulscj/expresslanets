"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.info = exports.login = exports.register = void 0;
const express_1 = require("express");
const jsonwebtoken_1 = require("jsonwebtoken");
const datasource_1 = __importDefault(require("../datasource"));
const logger_1 = require("../logger");
const logins_1 = __importDefault(require("../entities/logins"));
const constants_1 = require("../../constants");
const router = (0, express_1.Router)();
//const expiresIn = EXPIRES ? String(EXPIRES) : "15m";
const expiresIn = typeof constants_1.EXPIRES === "number" ? constants_1.EXPIRES : "15m";
const register = (req, res) => {
    const { username, password } = req.body;
    datasource_1.default
        .getRepository(logins_1.default)
        .findOneByOrFail({ username })
        .then(() => {
        (0, logger_1.responseAndLogger)(res, 'User already exists', 406);
    })
        .catch(() => {
        const user = new logins_1.default();
        user.username = username;
        user.password = password;
        datasource_1.default
            .getRepository(logins_1.default)
            .save(user)
            .then((user) => res.send(user))
            .catch((error) => (0, logger_1.responseAndLogger)(res, error.message, 500));
    });
};
exports.register = register;
const login = (req, res) => {
    const { username, password } = req.body;
    datasource_1.default
        .getRepository(logins_1.default)
        .findOneByOrFail({ username })
        .then((user) => {
        if (user.validatePassword(password)) {
            (0, jsonwebtoken_1.sign)({ id: user.id, username: user.username }, constants_1.SECRET, { expiresIn }, (err, token) => {
                if (err || !token) {
                    (0, logger_1.responseAndLogger)(res, 'It was not possible to generate the token', 400);
                }
                return res.send({ token });
            });
        }
        else {
            (0, logger_1.responseAndLogger)(res, 'Invalid password', 400);
        }
    })
        .catch(() => (0, logger_1.responseAndLogger)(res, 'Invalid user', 400));
};
exports.login = login;
const info = (req, res) => {
    res.send(res.locals.payload);
};
exports.info = info;
exports.default = router;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const express_1 = require("express");
const logger_1 = __importDefault(require("../logger"));
const middleWares = [
    (0, morgan_1.default)("tiny", { stream: { write: (m) => logger_1.default.http(m.split("\n")[0]) } }), //TODO: analizar
    (0, helmet_1.default)(),
    (0, cors_1.default)(),
    (0, express_1.json)(),
];
exports.default = middleWares;

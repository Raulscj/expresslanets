"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const v0_1 = __importDefault(require("./v0"));
const auth_1 = __importDefault(require("./auth/login/auth"));
const router = (0, express_1.Router)();
router.use("/v0", v0_1.default);
router.use("/auth", auth_1.default);
exports.default = router;

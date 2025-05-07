"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const verifytoken_1 = __importDefault(require("../../../middlewares/verifytoken"));
const auth_controller_1 = require("../../../controllers/auth.controller");
const router = (0, express_1.Router)();
router.post("/login", auth_controller_1.login);
router.get("/info", verifytoken_1.default, auth_controller_1.info);
router.post('/register', auth_controller_1.register);
exports.default = router;

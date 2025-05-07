"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controllers_1 = require("../../controllers/user.controllers");
const verifytoken_1 = __importDefault(require("../../middlewares/verifytoken"));
// Creación de la ruta
const router = (0, express_1.Router)();
//router.get("/", view);
router.get("/", verifytoken_1.default, user_controllers_1.getUsers);
router.post("/", verifytoken_1.default, user_controllers_1.createUser);
router.put("/", verifytoken_1.default, user_controllers_1.updateUser);
router.delete("/", verifytoken_1.default, user_controllers_1.deleteUser);
exports.default = router;

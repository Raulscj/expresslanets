"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  (function () {
    var ownKeys = function (o) {
      ownKeys =
        Object.getOwnPropertyNames ||
        function (o) {
          var ar = [];
          for (var k in o)
            if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
          return ar;
        };
      return ownKeys(o);
    };
    return function (mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null)
        for (var k = ownKeys(mod), i = 0; i < k.length; i++)
          if (k[i] !== "default") __createBinding(result, mod, k[i]);
      __setModuleDefault(result, mod);
      return result;
    };
  })();
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SECRET =
  exports.DATABASE =
  exports.ADMIN =
  exports.EXPIRES =
  exports.PORT_DB =
  exports.PASSWORD =
    void 0;
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const verifyEnvVariable = (name) => {
  var _a;
  const value =
    (_a = process.env[name]) === null || _a === void 0 ? void 0 : _a.trim();
  if (!value) {
    throw new Error(`${name} variable is undefined or empty`);
  }
  return value;
};
(_a = process.env),
  (exports.PASSWORD = _a.PASSWORD),
  (exports.PORT_DB = _a.PORT_DB),
  (exports.EXPIRES = _a.EXPIRES);
exports.ADMIN = verifyEnvVariable("ADMIN");
exports.DATABASE = verifyEnvVariable("DATABASE");
exports.SECRET = verifyEnvVariable("TOKEN_SECRET");

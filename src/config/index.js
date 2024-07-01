"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
console.log(`__dirname:`, __dirname);
const envInit = dotenv_1.default.config(({
    path: path_1.default.resolve(__dirname, '..', 'env', `.env.${process.env.environment}`)
}));
console.log(`envInit:`, envInit);
if (envInit.error) {
    throw envInit.error;
}
console.log(`process.env`, process.env);
const Config = {
    PORT: process.env.PORT
};
exports.default = Config;

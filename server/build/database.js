"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_mysql_1 = __importDefault(require("promise-mysql"));
const database = {
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
};
const pool = promise_mysql_1.default.createPool(database);
pool
    .getConnection()
    .then((conn) => {
    pool.releaseConnection(conn);
    console.log("DB is connected");
})
    .catch((err) => console.error(`Sorry, I can't connect to database! :(\n${err}`));
exports.default = pool;

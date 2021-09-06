require("dotenv").config();

const knex = require("knex");
const Pool = require("pg").Pool;
const { Client } = require("pg");

let pool;
let db;

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  pool = new Pool({
    host: "127.0.0.1",
    user: "postgres",
    password: process.env.PASSWORD,
    port: 5432,
    database: "socialmedia",
  });
} else {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      required: true,
      rejectUnauthorized: false,
    },
    sslmode: "require",
  });
}

module.exports = { db, pool };

const enviroment = process.env.NODE_ENV || "development";
const configs = require("./knexfile");
const dbConfig = configs[enviroment];
const knex = require("knex");
const connection = knex(dbConfig);

module.exports = connection;

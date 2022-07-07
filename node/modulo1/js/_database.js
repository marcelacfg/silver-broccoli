const pg = require("pg");

const client = new pg.Client({
  user: "carsoft",
  host: "pgsql.carsoft.com.br",
  database: "carsoft",
  password: "car123",
  port: 5432,
});

module.exports = client;

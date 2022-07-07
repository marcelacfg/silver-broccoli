const pg = require("pg");

const client = new pg.Client({
  user: "utebrngm",
  host: "kesavan.db.elephantsql.com",
  database: "utebrngm",
  password: "tyzn7lfiDHjEIc-OqS3AnuvCqPcDBCud",
  port: 5432,
});

module.exports = client;

const sequelize = require("../_database");

const models = {
  usuario: require("./usuario"),
  cliente: require("./cliente"),
  sequelize: sequelize,
};

module.exports = models;

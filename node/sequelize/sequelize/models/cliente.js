const Sequelize = require("sequelize");
const sequelize = require("../_database");

const Cliente = sequelize.define("cliente", {
  nome: {
    type: Sequelize.STRING,
  },
});

module.exports = Cliente;

// const Usuario = require("./usuario");

// Usuario.belongsToMany(Usuario, { through: "usuario_a_verificar" });

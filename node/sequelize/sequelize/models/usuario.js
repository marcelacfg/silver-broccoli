const Sequelize = require("sequelize");
const sequelize = require("../_database");

const Usuario = sequelize.define("usuario", {
  nome: {
    type: Sequelize.STRING,
  },
});

module.exports = Usuario;

// const Cliente = require("./cliente");

// Cliente.belongsToMany(Usuario, { through: "usuario_a_verificar" });

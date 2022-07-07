const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  user: "carsoft",
  host: "pgsql.carsoft.com.br",
  database: "carsoft",
  password: "car123",
  port: 5432,
  dialect: "postgres",
  logging: false,
  dialectOptions: {
    ssl: false,
  },
});

module.exports = sequelize;

async function test() {
  try {
    let result = await sequelize.authenticate();
    console.log("sequelize ok");
  } catch (error) {
    console.log("houve um erro", error);
    ProcessingInstruction.exit();
  }
}

test();

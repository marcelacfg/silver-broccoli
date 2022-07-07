const models = require("./models");

async function insert() {
  const usuario = await models.usuario.create({ nome: "Usuario teste node" });
  const cliente = await models.cliente.create({ nome: "Cliente teste node" });

  const users = await models.usuario.findAll();
  console.log("log: ", users);
  //await cliente.setUsuarios([usuario]);

  await models.sequelize.close();
}

insert();

// async funtion teste(){
//   const jane = await User.create({
//     username: 'janedoe',
//     birthday: new Date(1980, 6, 20),
//   });

//   const users = await User.findAll();
// }

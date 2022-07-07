const db = require("./_database");

async function list() {
  await db.connect();

  var result;

  result = await db.query("select * from usuario_a_verificar");
  console.log(result.rows);
}

list();

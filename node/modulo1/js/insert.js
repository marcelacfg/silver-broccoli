const db = require("./_database");

async function inserir() {
  await db.connect();
  const query =
    "insert into usuario_a_verificar(cliente_id, usuario_id, chave) values($1, $2, $3)";

  await db.query(query, [1, 122, "kjsdhjsdkjsd"]);
  await db.query(query, [1, 1, "kjsdhjsdkasjzxsd"]);
  await db.query(query, [1, 12, "kjsdhjsasfsdfddkjsd"]);

  await db.end();
}

inserir();

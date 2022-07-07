const express = require("express");
const bodyParse = require("body-parser");
const userRoute = require("./routes/userRoute");
const { verifyToken } = require("./src/middlewares/auth");
const { generateToken } = require("./src/services/auth");

const app = express();
const port = 3000;

app.set("json spaces", 2);
app.use(bodyParse.urlencoded({ extended: false }));
app.use(verifyToken);

userRoute(app);

app.get("/", (req, res) => res.send("Ola mundo"));

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username !== "marcela" || password !== "123") {
    return res.status(400).send({ error: "Usuario ou senha invalidos" });
  }

  const payload = {
    sub: 1,
    name: "nome usuario",
    roles: ["admin"],
  };

  const token = generateToken(payload);

  res.send({ token });
});

app.listen(port, () => console.log("Api rodando"));

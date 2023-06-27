import express, { Request, Response, NextFunction } from "express";
import errorHandler from "./middleware/error-handler.middlawre";
import statusRoute from "./routes/status.route";
import usersRoute from "./routes/users.route";

const app = express();
//Configurações da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurações de Rotas
app.use(usersRoute);
app.use(statusRoute);

app.get("/teste", (req: Request, res: Response) => {
  console.log("teste");
  return res.status(200).json({ message: "OK" });
});

app.post("/teste", (req: Request, res: Response) => {
  console.log("teste post");
  return res.status(201).json({ message: "Teste Post" });
});

// Configuracao dos Handlers de Erro
app.use(errorHandler);

//Inicialização
app.listen(3000, () => {
  console.log("Aplicação executando na porta 3000");
});

import express, { application, NextFunction, Request, Response } from "express";
import { URLController } from "./controller/URLController";

const api = express();
api.use(express.json());
api.use(express.urlencoded({ extended: true }));

api.get("/teste", (req: Request, res: Response, next: NextFunction) => {
  res.sendStatus(200).send("OK");
});

const urlController = new URLController();

api.post("/shorten", urlController.shorten);
api.get("/:hash", urlController.redirect);

api.listen(3001, () => console.log("API Rodando!!!!"));

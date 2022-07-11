import { config } from "../config/constants";
import { Request, response, Response } from "express";
import shortid from "shortid";
import urlRepository from "../repositories/url.repository";

export class URLController {
  public async shorten(req: Request, res: Response): Promise<void> {
    const newUrl = req.body;
    const url = await urlRepository.findByURL(newUrl.originurl);
    if (url) {
      res.json(url);
      return;
    }

    newUrl.hash = shortid.generate();
    newUrl.shorturl = `${config.API_URL}/${newUrl.hash}`;

    await urlRepository.create(newUrl);
    res.sendStatus(201);
  }

  public async redirect(req: Request, res: Response): Promise<void> {
    const { hash } = req.params;
    const url = await urlRepository.findByHash(hash);
    if (url) {
      res.redirect(url.originurl);
      return;
    } else res.sendStatus(418);
  }
}

import db from "../db";
import URL from "../models/url.model";

class URLRepository {
  async findByURL(urlOrigin: string): Promise<URL> {
    try {
      const query = `
        select originURL, shortURL, hash 
        from shorter_url 
        where originURL = $1
      `;

      const params = [urlOrigin];
      const { rows } = await db.query<URL>(query, params);
      const [url] = rows; //Pegar primeira posicao do array
      console.log(url);
      return url;
    } catch (error) {
      //throw new DatabaseError("Erro na consulta por ID", error);
      throw error;
    }
  }

  async findByHash(hash: string): Promise<URL> {
    try {
      const query = `
        select originURL, shortURL, hash 
        from shorter_url 
        where hash = $1
      `;

      const params = [hash];
      const { rows } = await db.query<URL>(query, params);
      const [url] = rows; //Pegar primeira posicao do array
      return url;
    } catch (error) {
      throw error;
    }
  }

  async create(url: URL): Promise<string> {
    const script = `
      INSERT INTO shorter_url (hash, originURL, shortURL)
      VALUES ($1, $2, $3)
    `; //Colocar chave de criptografia numa variavel de ambiente

    const params = [url.hash, url.originurl, url.shorturl];
    await db.query(script, params);
    return "OK";
  }
}

export default new URLRepository();

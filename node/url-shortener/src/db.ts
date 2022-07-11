import { Pool } from "pg";

const connectionString =
  "postgres://utebrngm:tyzn7lfiDHjEIc-OqS3AnuvCqPcDBCud@kesavan.db.elephantsql.com/utebrngm";
const db = new Pool({ connectionString });

export default db;

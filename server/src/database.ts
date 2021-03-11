import mysql from "promise-mysql";
import keys from "./keys";

const pool = mysql.createPool(keys.database);

pool
  .getConnection()
  .then((conn) => {
    pool.releaseConnection(conn);
    console.log("DB is connected");
  })
  .catch((err) => console.error(`Sorry, I can't connect to database! :(\n${err}`));

export default pool;

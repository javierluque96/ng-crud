import mysql from "promise-mysql";

const database = {
  host: process.env.HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
};
const pool = mysql.createPool(database);

pool
  .getConnection()
  .then((conn) => {
    pool.releaseConnection(conn);
    console.log("DB is connected");
  })
  .catch((err) =>
    console.error(`Sorry, I can't connect to database! :(\n${err}`)
  );

export default pool;

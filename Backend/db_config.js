import pg from "pg";

const client = new pg.Pool({
    user: "postgres",
    password: "post123456" ,
    host: "localhost",
    database: "pratica",
    port: 5432,
})

export default client;
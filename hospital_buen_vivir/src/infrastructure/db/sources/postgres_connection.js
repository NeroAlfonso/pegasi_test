const pg =require('pg');
let dbCredentials = 
{
    user:this.process.env.PG_DB_USER,
    host:this.process.env.PG_DB_HOST,
    name:this.process.env.PG_DB_NAME,
    password:this.process.env.PG_DB_USER_PASSWORD,
    port:parseInt(process.env.PG_DB_PORT)
};
const dbConn =new pg.Pool(
    {
        user:       dbCredentials.user,
        host:       dbCredentials.host,
        database:   dbCredentials.name,
        password:   dbCredentials.password,
        port:       dbCredentials.port
    }
);
module.exports = dbConn;
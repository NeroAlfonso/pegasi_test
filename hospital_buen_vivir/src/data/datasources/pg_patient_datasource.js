const sqlPGPNamed =require('../../infrastructure/db/utils/sql_pg_named_params');
module.exports = class PgPatientDatasource {
    constructor(dbConn) 
    {
      this.dbConn =dbConn;
    }
    async getAllPatients(patientId) {
        const query = patientId ?
            `
                select
                    "_id",
                    nombre_completo,
                    cedula,
                    nacimiento,
                    fallecido,
                    ciudad_nacido,
                    direccion_actual,
                    "correoActual",
                    a_t,
                    "UT"
                from
                    public.patiens
                where cedula = :patientId
            ` :
            `
                select
                    "_id",
                    nombre_completo,
                    cedula,
                    nacimiento,
                    fallecido,
                    ciudad_nacido,
                    direccion_actual,
                    "correoActual",
                    a_t,
                    "UT"
                from
                    public.patiens
            `;
        const rawResponse =await this.dbConn.query(sqlPGPNamed(query)({patientId}));
        return {rows: rawResponse.rows};
    }
  }
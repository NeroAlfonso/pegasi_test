const sqlPGPNamed =require('../utils/sql_pg_named_params');
const ErrorsCatalog =require('../../domain/utils/errors_catalog');
module.exports = class PgPatientDatasource {
    constructor(dbConn) 
    {
      this.dbConn =dbConn;
    }
    async getPatients(patientId) {
        try
        {
            const query = patientId ?
            `
                select
                    "_id",
                    "name",
                    identifier,
                    "birthDate",
                    "isDeceased",
                    "birthCity",
                    address,
                    email,
                    "createdAt",
                    "updateAt",
                    "deceasedBirth",
                    married
                from
                    public.patiens
                where
                    identifier =:patientId
            ` :
            `
                select
                    "_id",
                    "name",
                    identifier,
                    "birthDate",
                    "isDeceased",
                    "birthCity",
                    address,
                    email,
                    "createdAt",
                    "updateAt",
                    "deceasedBirth",
                    married
                from
                    public.patiens
            `;
            const rawResponse =await this.dbConn.query(sqlPGPNamed(query,{patientId}));
            return {rows: rawResponse.rows};
        }
        catch(e)
        {
            throw new GeneralError('Error al conectar con la base de datos', ErrorsCatalog.ServiceUnavailable);
        }
    }
  }
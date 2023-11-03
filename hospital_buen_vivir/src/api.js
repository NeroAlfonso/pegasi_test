const api =require('./infrastructure/server');
//const PgPatientDatasource =require('./data/datasources/pg_patient_datasource');
//const dbConn = require('./infrastructure/db/sources/postgres_connection');
const patientRouter =require('./infrastructure/routers/patient_router');
//const pgPatientDataSource =new PgPatientDatasource(dbConn);
api.use('/patient', patientRouter());
api.get('/', (req, res) => res.setHeader('content-type', 'text/plain').send('Hospital Buen vivir Api v1'))

const server =api.listen(
        (process.env.NODE_ENV !== 'test' ? process.env.API_PORT : 0),
        async () => console.log(`Hospital Buen vivir Api iniciada en el puerto ${(process.env.API_PORT)}`)
);
module.exports = {api, server};


const api =require('./infrastructure/server');
const dbConn = require('./infrastructure/db/sources/mongo_connection');

//appointment suite begin
const MgAppointmentDatasource =require('./data/datasources/mg_appointment_datasource');
const ExtHospitalBuenVivirDatasource =require('./data/datasources/ext_hospital_buen_vivir_datasource');
const ExtSystemTechnologiesDatasource =require('./data/datasources/ext_system_technologies_datasource');
const AppointmentRepositoryImp = require('./domain/repositories/implementations/appointment_repository');
const GetAppointmentsUcase = require('./domain/ucases/implementations/appointment/get');
const appointmentRouter =require('./infrastructure/routers/appointment_router');
const CreateAppointmentsUcase = require('./domain/ucases/implementations/appointment/create');
const mgAppointmentDataSource =new MgAppointmentDatasource(dbConn);
const extHospitalBuenVivirDatasource =new ExtHospitalBuenVivirDatasource();
const extSystemTechnologiesDatasource =new ExtSystemTechnologiesDatasource();
api.use('/appointment', appointmentRouter(
   new GetAppointmentsUcase(new AppointmentRepositoryImp(mgAppointmentDataSource, extHospitalBuenVivirDatasource, extSystemTechnologiesDatasource)),
   new CreateAppointmentsUcase(new AppointmentRepositoryImp(mgAppointmentDataSource, extHospitalBuenVivirDatasource, extSystemTechnologiesDatasource))
 ));
//appointment suite end

api.get('/', (req, res) => res.setHeader('content-type', 'text/plain').send('Pegasi Api v1'))

const server =api.listen(
        (process.env.NODE_ENV !== 'test' ? process.env.API_PORT : 0),
        async () => console.log(`Pegasi Api iniciada en el puerto ${(process.env.API_PORT)}`)
);
module.exports = {api, server};


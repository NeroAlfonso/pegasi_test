const ErrorsCatalog =require('../../domain/utils/errors_catalog');
const { Appointments } = require('../schemas/appointments');
module.exports = class MgAppointmentDatasource {
    constructor(dbConn) 
    {
      this.dbConn =dbConn;
    }
    async getAppointments(patientId, createdAppointment) {
        try
        {
            let query ={};
            if(patientId) query["paciente.dni"] = patientId;
            if(createdAppointment) query["fechaRegistro"] = new Date(createdAppointment);
            const appointments = await Appointments.find(query);
            return {rows: appointments};
        }
        catch(e)
        {
            throw new GeneralError('Error al conectar con la base de datos', ErrorsCatalog.ServiceUnavailable);
        }
    }
    async createAppointment(body)
    {
        try
        {
                const response = await  Appointments.create(body);
                return {rows:[response]};
        }
        catch(e)
        {
            throw new GeneralError('Error al conectar con la base de datos', ErrorsCatalog.ServiceUnavailable);
        }
    }
  }
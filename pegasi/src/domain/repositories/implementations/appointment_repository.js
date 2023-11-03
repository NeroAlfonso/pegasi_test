const AppointmentRepository =require('../bases/appointment_repository');
module.exports =class AppointmentRepositoryImp extends AppointmentRepository
{
    constructor(appointmentDataSource)
    {
        super();
        this.appointmentDataSource =appointmentDataSource;
    }
    async getAppointments(patientId, createdAppointment){
        return (await this.appointmentDataSource.getAppointments(patientId, createdAppointment)).rows;
    }
}